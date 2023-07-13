# GraphQL Reference

## Installation

```sh
npm i express express-graphql graphql
```

## Setup

First define the `schema` to be used by graphQL:

```js
// /graphQL/schema.js
const { default: axios } = require('axios');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user object model',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: async (_, args) => {
        // http://localhost:8000/users/2
        const res = await axios.get(`${userURL}${args.id}`);
        return res.data.user;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
```

Set router in `app.js` for `/graphql` routes:

```js
// app.js
const app = express();
const schema = require('./graphQL/schema');
const expressGraphQL = require('express-graphql');

app.use(
  '/graphql',
  expressGraphQL.graphqlHTTP({
    graphiql: true, // For development
    schema,
  })
);
```

## Circular Reference

This is where 2 models are connected with each other and one can be used to access another. Example `users` and `companies`.

```js
// /graphQL/schema.js

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  description: 'A company object model',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      // List of users
      type: new GraphQLList(UserType),
      resolve: async (source, _) => {
        // http://localhost:8000/companies/2/users
        const res = await axios.get(
          `${companyURL}${source.id}/users`
        );
        return res.data.users;
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user object model',
  // Closure
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    isNice: { type: GraphQLBoolean },
    company: {
      type: CompanyType,
      resolve: async (source, _) => {
        const res = await axios.get(
          `${companyURL}${source.companyId}`
        );
        return res.data.company;
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: async (_, args) => {
        const res = await axios.get(`${userURL}${args.id}`);
        return res.data.user;
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve: async (_, args) => {
        const res = await axios.get(`${companyURL}${args.id}`);
        return res.data.company;
      },
    },
  },
});
```

In this case, the `root query` can query either a `user` or `company` & from each model, you can access the other. In order to avoid `js use b4 declaration` issue in the modelTypes, wrap the `fields` of each in a function exhibiting closure where by the time the function is called, the entire file has been parsed.
Also when a `resolve` is to return an array of results, the resolved type should be wrapped in the `GraphQLList` class instance like `type: new GraphQLList(ModelType)`

## Queries

1 level:

```js
{
  user(id: "1") {
    name,
    age
  }
}
```

2 levels:

```js
{
  company(id: "4") {
    name,
    users {
      name,
      age
    }
  }
}
```

### Named query

```js
query queryName {
  user(id: "4") {
    name
  }
}
```

### Fragments

This is in a case where more that 1 query is made and the properties fetched from the queries are similar:

```js
{
  person1: user(id: "1") {
    ...userDetails
  }
  person2: user(id: "2") {
    ...userDetails
  }
}

// fragment fragmentName on Model
fragment userDetails on User {
  name
  age
  company {
    name
  }
}
```

### Mutations

These are like post requests as I define in the next section:

```js
mutation {
  createUser(name: "Lilly", age: 21) {
    name
    company {
      name
    }
  }
}
```

## Mutations

They manipulate the data using `crud`. Example to create a user:

```js
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: new GraphQLNonNull(GraphQLString) },
        isNice: { type: GraphQLBoolean },
      },
      resolve: async (_, { name, age, companyId }) => {
        const data = { name, age, companyId };
        const res = await axios.post(userURL, data);
        return res.data.user;
      },
    },
  },
});

// Then add to schema
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
```

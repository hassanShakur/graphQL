const { default: axios } = require('axios');
const graphql = require('graphql');
const userURL = 'http://localhost:8000/users/';
const companyURL = 'http://localhost:8000/companies/';

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  description: 'A company object model',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve: async (source, _) => {
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

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;

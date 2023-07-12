const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;

const users = [
  { id: '1', name: 'Dragon', age: 18, isNice: true },
  { id: '2', name: 'Chen', age: 19, isNice: true },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user object model',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    isNice: { type: GraphQLBoolean },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      // src == parentValue
      resolve: (source, args) => _.find(users, { id: args.id }),
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;

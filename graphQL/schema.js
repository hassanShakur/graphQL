const { default: axios } = require('axios');
const graphql = require('graphql');
const userURL = 'http://localhost:8000/users/';
const companyURL = 'http://localhost:8000/companies/';

const {
  GraphQLObjectType,
  GraphQLSchema,
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
});

module.exports = schema;

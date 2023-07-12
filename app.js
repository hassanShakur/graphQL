const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphQL/schema');

const userRouter = require('./routers/userRouter');
const companyRouter = require('./routers/companyRouter');

const app = express();

app.use(
  '/graphql',
  expressGraphQL.graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.use('/users', userRouter);
app.use('/companies', companyRouter);

module.exports = app;

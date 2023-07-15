const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphQL/schema');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRouter = require('./routers/userRouter');
const companyRouter = require('./routers/companyRouter');

const app = express();

dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json())

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

const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphQL/schema');
const router = require('./userRouter');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: 'config.env' });

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  '/graphql',
  expressGraphQL.graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.use('/users', router);

const port = 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

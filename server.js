const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphQL/schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQL.graphqlHTTP({
    graphiql: true,
    schema,
  })
);

const port = 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

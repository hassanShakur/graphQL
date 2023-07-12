const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DB_LOCAL;

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful...');
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

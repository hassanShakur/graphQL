const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

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

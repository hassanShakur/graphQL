const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./../models/userModel');
const Company = require('./../models/companyModel');

dotenv.config({ path: `${__dirname}/../config.env` });

const userPath = path.resolve(__dirname, 'users.json');
const companyPath = path.resolve(__dirname, 'companies.json');

const users = JSON.parse(
  fs.readFileSync(userPath, {
    encoding: 'utf-8',
  })
);

const companies = JSON.parse(
  fs.readFileSync(companyPath, {
    encoding: 'utf-8',
  })
);

const DB = process.env.DB_LOCAL;

const connectDB = () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log('DB connection successful...');
    })
    .catch((err) => {
      console.log(err);
    });
};

const importDocs = async () => {
  connectDB();

  try {
    await User.create(users);
    await Company.create(companies);
    console.log('Docs created successfully!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteDocs = async () => {
  connectDB();

  try {
    await User.deleteMany();
    await Company.deleteMany();
    console.log('Docs deleted successfully!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') importDocs();
if (process.argv[2] === '--delete') deleteDocs();

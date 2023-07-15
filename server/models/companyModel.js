const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please provide company id!'],
    unique: [true, 'Company Id already exists!']
  },
  name: {
    type: String,
    required: [true, 'Please provide company name!'],
  },
  description: {
    type: String,
    required: [true, 'Please provide company description!'],
  },
 
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;

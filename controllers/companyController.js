const Company = require('../models/companyModel');
const User = require('../models/userModel')

module.exports.getCompany = async (req, res) => {
  const id = req.params.id;
  const company = await Company.findOne({ id });

  res.status(200).json({
    status: 'Success',
    company,
  });
};

module.exports.getCompanyUsers = async (req, res) => {
  const id = req.params.id;
  const users = await User.find({ companyId: id });

  res.status(200).json({
    status: 'Success',
    users,
  });
};

module.exports.getAllCompanies = async (_, res) => {
  const companies = await Company.find();

  res.status(200).json({
    status: 'Success',
    results: companies.length,
    companies,
  });
};

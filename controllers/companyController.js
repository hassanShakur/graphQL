const Company = require('../models/companyModel');

module.exports.getCompany = async (req, res) => {
  const id = req.params.id;
  const company = await Company.findOne({ id });

  res.status(200).json({
    status: 'Success',
    company,
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

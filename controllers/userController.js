const User = require('../models/userModel');

module.exports.getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ id });

  res.status(200).json({
    status: 'Success',
    user,
  });
};

module.exports.createUser = async (req, res) => {
  const { name, age, companyId } = req.body;

  const user = await User.create({
    name,
    age,
    companyId,
  });

  res.status(201).json({
    status: 'Success',
    user,
  });
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.body;

  const user = await User.findOneAndUpdate({ id }, req.body);

  res.status(202).json({
    status: 'Success',
    user,
  });
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ id });

  res.status(204).json({
    status: 'Success',
  });
};

module.exports.getAllUsers = async (_, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'Success',
    results: users.length,
    users,
  });
};

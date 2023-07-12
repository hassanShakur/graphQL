const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please provide user id!'],
    unique: [true, 'A user with the id exists!'],
  },
  name: {
    type: String,
    required: [true, 'Please provide user name!'],
  },
  age: {
    type: Number,
    required: [true, 'Please provide user age!'],
  },
  isNice: {
    type: Boolean,
    required: [true, 'Please provide user niceness!'],
  },
  companyId: {
    type: String,
    required: [true, 'Please provide user company id!'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

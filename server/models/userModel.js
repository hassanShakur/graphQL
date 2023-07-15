const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
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
    required: false,
  },
  companyId: {
    type: String,
    required: [true, 'Please provide user company id!'],
  },
});

userSchema.pre('save', function () {
  this.id = this._id.toString();
});

const User = mongoose.model('User', userSchema);
module.exports = User;

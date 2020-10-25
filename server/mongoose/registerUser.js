const mongoose = require('mongoose');
const userSchema = require('./userSchema');

const userModel = mongoose.model('User', userSchema);

module.exports = async function (data) {
  const res = await userModel.create({
    name: data.name, email: data.email, password: data.password, 'data.rate': data.rate,
  });
  return res;
};

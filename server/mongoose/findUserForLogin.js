/* eslint-disable func-names */
const mongoose = require('mongoose');
const userSchema = require('./userSchema');

const userModel = mongoose.model('User', userSchema);

module.exports = async function (email, pass) {
  const [doc] = await userModel.find({ email }, (err, docs) => docs);
  if (!doc) {
    return 'WrongEmail';
  }
  if (doc.password !== pass) {
    return 'WrongPassword';
  }
  return doc;
};

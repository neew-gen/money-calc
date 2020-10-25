const mongoose = require('mongoose');
const userSchema = require('./userSchema');

const userModel = mongoose.model('User', userSchema);

module.exports = async function (id, rate) {
  const [doc] = await userModel.find({ _id: id }, (err, docs) => docs);
  doc.data.rate = rate;
  await doc.save();
};

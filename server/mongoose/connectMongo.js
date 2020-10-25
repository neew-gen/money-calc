const mongoose = require('mongoose');

module.exports = function () {
  let db = {};
  mongoose.connect('mongodb+srv://228gena1488:gena411033@cluster0.c5rhs.mongodb.net/moneyCalc?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  return db;
};

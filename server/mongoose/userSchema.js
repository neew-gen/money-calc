const mongoose = require('mongoose');

const { Schema } = mongoose;
module.exports = new Schema({
  name: String,
  email: String,
  password: String,
  data: {
    rate: Number,
  },
});

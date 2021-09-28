const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userData = new Schema({
  name: { type: String },
  surname: { type: String },
  country: { type: String },
  age: { type: Number },
  gender: { type: String },
});

module.exports = mongoose.model('data', userData);

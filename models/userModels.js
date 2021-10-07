const mongoose = require('mongoose');

const { Schema } = mongoose;

const modelSchema = new Schema({
  name: { type: String, required: true },

  surname: { type: String, required: true },

  mail: { type: String },

  age: { type: Number },

  password: { type: Number, required: true },
});

const User = mongoose.model('User', modelSchema);
module.exports = User;

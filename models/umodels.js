const mongoose = require('mongoose');

const { Schema } = mongoose;

const modelSchema = new Schema({
  name: { type: String, required: true },

  surname: { type: String, required: true },

  mail: { type: String },

  age: { type: Number, required: true },

  password: { type: String, required: true },
});

const Modelo = mongoose.model('Modelo', modelSchema);
module.exports = Modelo;

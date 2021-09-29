const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({
  name: { type: String, required: true },

  surname: { type: String, required: true },

  mail: { type: String },

  age: { type: Number, required: true },
});

const Modelo = module.exports = mongoose.model('modelo', modelSchema);

module.exports.get = function (callback, limit) {
    Modelo.find(callback).limit(limit);
};

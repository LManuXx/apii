const { models } = require('mongoose');
const Modelo = require('../models/umodels');

exports.app = function (req, res) {
  Modelo.get((err, models) => {
    if (err) {
      res.json({ status: 'error', message: err }); }
    return res.json({ status: 'éxito', message: 'Datos correctos', data: models }); }); };

exports.new = function (req, res) {
  const user = new Modelo();
  user.name = req.body.name ? req.body.name : Modelo.name;
  user.surname = req.body.surname;
  user.mail = req.body.mail;
  user.age = req.body.age;
  user.number = req.body.phone;
  user.save((err) => {
    if (err) {
      res.json(err); }
    res.json({ message: 'Nuevo usuario registrado', data: models }); }); };

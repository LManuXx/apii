const Modelo = require('../models/userModels');

function getUsers(req, res) {
  Modelo.find((err, models) => {
    if (err) {
      res.status(400).send(err);
    }
    return res.status(200).send(models);
  });
};

function postUsers(req, res) {
  let user = new Modelo(req.body);
  user.save((err, newUser) => {
    if (err) { res.status(400).send(err); }
    return res.status(200).send(newUser);
  });
};

module.exports = { getUsers, postUsers };

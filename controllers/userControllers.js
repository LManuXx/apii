const User = require('../models/userModels');

function getUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      res.status(400).send(err);
    }
    return res.status(200).send(users);
  });
}

function getUsersById(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400).send(err); }
    res.status(200).send(user);
  });
}

function postUsers(req, res) {
  const user = new User(req.body);
  user.save((err, newUser) => {
    if (err) { res.status(400).send(err); }
    return res.status(200).send(newUser);
  });
}

function updateUsers(req, res) {
  User.findById(req.params.id, (err, user) => {
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.mail = req.body.mail;
    user.age = req.body.age;
    user.password = req.body.password;

    user.save((error, newUser) => {
      if (err) return res.status(400).send(error);
      return res.status(200).send(newUser);
    });
  });
}

function deleteUsers(req, res) {
  User.findById(req.params.id, (err, user) => {
    user.remove((err) => {
      if (err) return res.status(400).send(err.message);
      res.status(200).send();
    });
  });
}

module.exports = {
  getUsers,
  postUsers,
  deleteUsers,
  updateUsers,
  getUsersById,
};

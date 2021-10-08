const User = require('../models/userModels');

function getUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      res.status(400).send(err);
    }
    return res.status(200).send(users);
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
  User.find(req.params.id, (err, user) => {
    user.name = req.body.name;
    user.surname = req.body.username;
    user.mail = req.mail.mail;
    user.age = req.body.age;
    user.password = req.body.password;

    user.save(() => {
      if (err) return res.status(400).send(err.message);
      return res.status(200).jsonp(user);
    });
  });
}

function deleteUsers(req, res) {
  User.find((req.params.id, (err, user) => {
    user.remove((err) => {
      if (err) return res.status(400).send(err.message);
      res.status(200).send(user);
    });
      })
  );
}

module.exports = {
  getUsers, postUsers, deleteUsers, updateUsers,
};

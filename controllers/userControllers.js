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

function updateUsers(req, res){
  User.find((err, users)={

  };
);
}

function deleteUsers(req, res){
  User.find((err, users)={

  };
);
}

module.exports = { getUsers, postUsers };

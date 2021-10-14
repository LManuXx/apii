const User = require('../models/userModels');
/* Creo los controladores de los users */
function getUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      res.status(400).send(err);
    }
    return res.status(200).send(users);
  });
}
/* Obtener usuarios por id */
function getUsersById(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400).send(err); }
    res.status(200).send(user);
  });
}
/* Crear nuevos usuarios */
function postUsers(req, res) {
  const user = new User(req.body);
  user.save((err, newUser) => {
    if (err) { res.status(400).send(err); }
    return res.status(200).send(newUser);
  });
}
/* Actualizar usuarios */
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
/* Eliminar usuarios */
function deleteUsers(req, res) {
  User.findById(req.params.id, (err, user) => {
    user.remove((err) => {
      if (err) return res.status(400).send(err.message);
      res.status(200).send();
    });
  });
}
/* Exporto todas las funciones */
module.exports = {
  getUsers,
  postUsers,
  deleteUsers,
  updateUsers,
  getUsersById,
};

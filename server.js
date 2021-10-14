const mongoose = require('mongoose');
const app = require('./app');

const db = mongoose.connect;
const port = process.env.PORT || 8080;
/* Nos conectamos con el server y comprobamos si la conexion esta funcionando */
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true }, () => {
  if (!db) {
    console.log('El servidor no funciona');
  }
  else {
    console.log('El servidor funciona');
    app.listen(port, () => {
    });
    console.log('Servidor funcionando en el puerto: ${port}');
  }
}
);

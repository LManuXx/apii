/* Se importa todo lo necesario. */
const express = require('express');

const app = express();
const methodOverride = require('method-override');

const mongoose = require('mongoose');


const db = mongoose.connection;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(express.json());

const apiRoutes = require('./routes/userRoutes');

if (db) {
  console.log('El servidor esta en marcha');
}

app.get('/', (req, res) => res.send('funcionando'));

app.use('/api', apiRoutes);

app.listen(8080, () => {
  console.log('Servidor activadisimo en el puerto 8080');
});

module.exports = app;

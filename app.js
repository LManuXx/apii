// se importa todo lo necesario.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use (bodyParser.json ());

const apiRoutes = require('./routes/uroutes');

app.get('/', (req, res) => res.send('Creo que esta funcionando'));

app.use('/api', apiRoutes);

app.listen(10000, function () {
  console.log("Servidor activadisimo en el puerto 10000");
});
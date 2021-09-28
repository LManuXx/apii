// se importa todo lo necesario.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// importamos los modelos y los controllers.

const rutas = require('./routes/uroutes');

//const router = express.Router();

//app.use(router);



app.listen(5000, function () {
  console.log("funciona");
});
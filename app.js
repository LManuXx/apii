/* Se importa todo lo necesario. */ 
require('./server');

const express = require('express');
const methodOverride = require('method-override');
const apiRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(express.json());

app.get('/', (req, res) => res.send('funcionando'));

app.use('/api', apiRoutes);
/* Se exporta la app */
module.exports = app;

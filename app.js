/* Se importa todo lo necesario. */
const express = require('express');

const app = express();
const methodOverride = require('method-override');
require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(express.json());

const apiRoutes = require('./routes/uroutes');

app.get('/', (req, res) => res.send('Creo que esta funcionando'));

app.use('/api', apiRoutes);

app.listen(8080, () => {
  console.log('Servidor activadisimo en el puerto 8080');
});

module.exports = app;

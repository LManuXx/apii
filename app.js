/* Se importa todo lo necesario. */
require('./server');

const express = require('express');
const methodOverride = require('method-override');
const apiRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(express.json());

app.get('/', (req, res) => res.send('funcionando'));

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log('Servidor funcionando en el puerto: ' + port);
});

module.exports = app;

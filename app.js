/* Se importa todo lo necesario. */
const express = require('express');

const app = express();
const methodOverride = require('method-override');

const port = process.env.PORT || 8080;
const apiRoutes = require('./routes/userRoutes');
require('./server');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(express.json());

app.get('/', (req, res) => res.send('funcionando'));

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log('Servidor funcionando en el puerto ${port}');
});

module.exports = app;

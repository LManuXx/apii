/* Se importa todo lo necesario. */
const express = require('express');

const app = express();
const methodOverride = require('method-override');
const apiRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const db = mongoose.connection;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(express.json());

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


app.get('/', (req, res) => res.send('funcionando'));

app.use('/api', apiRoutes);

app.listen(8080, () => {
  console.log('Servidor activadisimo en el puerto 8080');
});

module.exports = app;

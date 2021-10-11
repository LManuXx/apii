const mongoose = require('mongoose');

const db = mongoose.connect;

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

if (!db) {
  console.log('El servidor no funciona');
}
else {
  console.log('El servidor funciona');
}

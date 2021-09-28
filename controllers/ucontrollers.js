const mongoose = require('mongoose');
const Data = mongoose.model("Data");
const models = require('../models/umodels')(app, mongoose);

exports.findAllData = function (req, res) {
    TVShow.find(function (err, userData) {
      if (err) res.send(500, err.message);
  
      console.log("GET /userData");
      res.status(200).jsonp(userData);
    });
  };
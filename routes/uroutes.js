var express = require('express');
var userData = express.Router();
const controllers = require('../controllers/ucontrollers');


userData.route('/userData')
  .get(controllers.findAllData)
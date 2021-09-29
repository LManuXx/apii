const router = require('express').Router();
const controllers = require('../controllers/ucontrollers');
router.route = ('/users');
  get(controllers.app)
  post(controllers.new);

module.exports = router;

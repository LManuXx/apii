var router = require('express').Router();
var usController = require('../controllers/ucontrollers');

router.route('/modelo')
	.get(usController.app)
  .post(usController.new);

module.exports = router;

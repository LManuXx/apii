const router = require('express').Router();
const usController = require('../controllers/ucontrollers');

router.route('/modelo')
  .get(usController.app)
  .post(usController.new);
	
module.exports = router;

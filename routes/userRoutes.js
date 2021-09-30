const router = require('express').Router();
const usController = require('../controllers/userControllers');

router.get('/modelo', usController.getUsers);
router.post('/modelo', usController.postUsers);

module.exports = router;

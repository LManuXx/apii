const router = require('express').Router();
const usController = require('../controllers/userControllers');

router.get('/users', usController.getUsers);
router.get('/users/:users_id', usController.getUsersById);
router.post('/users/', usController.postUsers);
router.put('/users/', usController.updateUsers);
router.delete('/users/', usController.deleteUsers);
module.exports = router;

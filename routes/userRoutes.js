const router = require('express').Router();
const usController = require('../controllers/userControllers');

router.get('/users', usController.getUsers);
router.get('/users/:id', usController.getUsersById);
router.post('/users/', usController.postUsers);
router.put('/users/:id', usController.updateUsers);
router.delete('/users/:id', usController.deleteUsers);
module.exports = router;

var router = require('express').Router();

router.get('/', function (req, res) {
    if(error)
      res.send(error);

    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
}
);

var usController = require('../controllers/ucontrollers');

router.route('/modelo')
    .get(usController.app)
    .post(usController.new);


module.exports = router;
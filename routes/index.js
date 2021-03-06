var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', userController.show);


module.exports = router;

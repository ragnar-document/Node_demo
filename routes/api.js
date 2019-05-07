var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 同一个接口地址，但是不同的请求方法
router.post('/user' , userController.insert);
router.put('/user' , userController.update);
router.delete('/user' , userController.delete);

module.exports = router;

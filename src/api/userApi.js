var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.post('/', userController.insert);
router.get('/', userController.getAll);

module.exports = router;

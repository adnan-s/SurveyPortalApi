const express = require('express');
const router = express.Router();
const userController = require('./controllers/user');

router.post('/', userController.insert);
router.get('/', userController.getAll);

module.exports = router;
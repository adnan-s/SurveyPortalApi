var express = require('express');
var router = express.Router();
var QutoeController = require('../controllers/quote');

router.post('/', QutoeController.insert);

module.exports = router;

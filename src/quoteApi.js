const express = require('express');
const router = express.Router();
const QutoeController = require('./controllers/quote');

router.post('/', QutoeController.insert)

module.exports = router;

var express = require('express');
var router = express.Router();
var QuestionController = require('../controllers/question');

router.post('/', QuestionController.insert);
router.get('/:surveyId', QuestionController.getById);

module.exports = router;
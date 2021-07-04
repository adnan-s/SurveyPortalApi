const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/question');

router.post('/', QuestionController.insert)
router.get('/:surveyId', QuestionController.getById);

module.exports = router;
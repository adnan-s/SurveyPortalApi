var router = require('express').Router();
var survey = require('../controllers/survey');

router.get('/', survey.getAll);
router.get('/:id', survey.getById);
router.post('/', survey.insert);
router.put('/', survey.update);
router.delete('/:id', survey.delete);

module.exports = router;


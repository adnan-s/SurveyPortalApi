const router = require('express').Router();
const survey = require('../controllers/survey');

router.get('/', survey.getAll);
router.get('/:id', survey.getById)
router.post('/', survey.insert);
router.put('/', survey.update);
router.delete('/:id', survey.delete);

module.exports = router;


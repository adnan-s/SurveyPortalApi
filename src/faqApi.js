const express = require('express');
const router = express.Router();
const faqController = require('./controllers/faq');

router.get('/', faqController.getAll);
router.post('/', faqController.insert);
router.put('/', faqController.update);
router.delete('/:id', faqController.delete);
router.get('/:id', faqController.getById);

module.exports = router;

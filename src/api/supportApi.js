var router = require('express').Router();
var support = require('../controllers/support');

router.get('/', support.getAll);
router.post('/', support.insert);
router.put('/', support.update);
router.delete('/:id', support.delete);
router.get('/:id', support.getById);

module.exports = router;
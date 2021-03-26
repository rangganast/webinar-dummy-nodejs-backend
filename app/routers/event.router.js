let router = require('express').Router();
const controller = require('../controllers/event.controller');

// routers
router.get('/:id', controller.findOne);

router.get('/', controller.findAll);

module.exports = router;
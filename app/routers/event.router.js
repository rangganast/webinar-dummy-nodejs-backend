let router = require('express').Router();
const controller = require('../controllers/event.controller');
const middlewares = require('../middlewares');

// routers
router.get('/:id', controller.findOne);

router.get('/', controller.findAll);

router.post('/join', middlewares.verifyToken, controller.joinEvent);

module.exports = router;
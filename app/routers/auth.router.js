let router = require('express').Router();
const controller = require('../controllers/auth.controller');

// routers
router.post('/signup', controller.signup);

router.post('/login', controller.login);

module.exports = router;
let router = require('express').Router();
const controller = require('../controllers/auth.controller');
const middlewares = require('../middlewares');
const { signupValidationRules, signupValidate } = require('../middlewares/signupValidator');
const { loginValidationRules, loginValidate } = require('../middlewares/loginValidator');

// routers
router.post('/signup', signupValidationRules(), signupValidate, controller.signup);

router.post('/login', loginValidationRules(), loginValidate, controller.login);

router.get('/profile', middlewares.verifyToken, controller.profile);

module.exports = router;
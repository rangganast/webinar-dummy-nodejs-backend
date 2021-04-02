let router = require('express').Router();
const controller = require('../controllers/auth.controller');
const { signupValidationRules, signupValidate } = require('../middlewares/signupValidator');
const { loginValidationRules, loginValidate } = require('../middlewares/loginValidator');

// routers
router.post('/signup', signupValidationRules(), signupValidate, controller.signup);

router.post('/login', loginValidationRules(), loginValidate, controller.login);

module.exports = router;
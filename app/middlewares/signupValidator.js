const { body, validationResult } = require('express-validator');

const signupValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Field should be an email!'),
        body('password').isLength({ min: 5 }).withMessage('Password should be at least 5 characters!'),
    ]
}

const signupValidate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    });
}

module.exports = {
    signupValidationRules,
    signupValidate
}
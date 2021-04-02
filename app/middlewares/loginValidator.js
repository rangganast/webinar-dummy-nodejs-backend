const { body, validationResult } = require('express-validator');

const loginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Field should be an email!'),
    ]
}

const loginValidate = (req, res, next) => {
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
    loginValidationRules,
    loginValidate
}
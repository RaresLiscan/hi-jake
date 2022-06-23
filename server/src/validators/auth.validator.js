const { body, validationResult } = require('express-validator');

const loginValidator = [
    body('email').isEmail(),
    body('password').isString().isLength({ min: 4 }),

    (request, response, next) => {
        const errors = validationResult(request);
        if (errors.isEmpty()) {
            return next();
        }
        return response.status(400).json({ errors: errors.array() });
    }
];

const registerValidator = [
    body('email').isString().isEmail(),
    body('password').isString().isLength({ min: 4 }),
    body('confirmPassword').isString(),

    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ error: errors.array() });
        }
        return next();
    }
]


module.exports = { loginValidator, registerValidator }
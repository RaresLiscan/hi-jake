const { application } = require('express');
const express = require('express');
const { login, register } = require('../controllers/auth.controller');
const { loginValidator, registerValidator } = require('../validators/auth.validator');

const authRouter = express.Router();

authRouter.use('/login', ...loginValidator);
authRouter.use('/register', ...registerValidator);

authRouter.post('/login', login);
authRouter.post('/register', register);

module.exports = authRouter;
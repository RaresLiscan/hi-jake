const authDatabase = require('../database/auth.database');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt.service');

const login = async (request, response) => {
    const { email, password } = request.body;
    const user = await authDatabase.login(email);

    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        const account = await authDatabase.login(email);
        response.json(jwt.sign(account));
    }
    response.status(404);
};

const register = async (request, response) => {
    const { email, password } = request.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const account = await authDatabase.register(email, hashedPassword);
    if (account === []) {
        response.send(500);
    }
    response.send(jwt.sign(account));
}

module.exports = { login, register };
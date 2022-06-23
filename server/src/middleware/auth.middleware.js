const jwt = require('../services/jwt.service');

const AuthGuard = (request, response, next) => {
    const authorization = request.headers.authorization;
    const isAuthorized = jwt.validation(authorization);
    if (isAuthorized) {
        return next();
    }
    else {
        response.sendStatus(405);
        return;
    };
}

module.exports = { AuthGuard };
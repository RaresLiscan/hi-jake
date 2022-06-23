const jwt = require('jsonwebtoken');

const sign = (data) => {
    const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: '60m' });

    return token;
}

const validation = (token) => {
    const valid = jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
        if (error) {
            return false;
        }
        if (decoded.exp * 1000 >= new Date().getTime()) {
            return true;
        }
        return false;
    });
    return valid;
}

module.exports = { sign, validation }
const mongo = require('./mongo.helper');

function login(email) {
    return mongo.executeQuery(loginQuery, email);
}

function register(email, password) {
    return mongo.executeQuery(registerQuery, email, password);
}

async function loginQuery(database, email) {
    const users = database.collection('users');

    try {
        const result = await users.findOne({
            email: email,
        });
        return result;
    } catch (error) {
        console.error(error);
    }
    return [];
}

async function registerQuery(database, email, password) {
    const users = database.collection('users');

    try {
        return await users.insertOne({
            email,
            password
        })
    }
    catch (error) {
        console.error(error);
    }
    return [];
}

module.exports = { login, register };
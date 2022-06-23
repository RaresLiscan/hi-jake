const { MongoClient } = require('mongodb');

async function executeQuery(query, ...params) {
    const client = new MongoClient(process.env.MONGO_CLIENT_URI);
    await client.connect();

    const database = await client.db(process.env.DB);
    const result = await query(database, ...params);
    await client.close();

    return result;
}

module.exports = { executeQuery };
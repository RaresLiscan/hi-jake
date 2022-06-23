const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.route');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());


app.use('/auth', authRoutes);

app.get('', (req, res) => {
    console.log("hello!");
    res.send("Hello!");
})

app.get('/test-mongo', async (req, res) => {
    const client = new MongoClient(process.env.MONGO_CLIENT_URI);
    await client.connect();
    console.log("Mongo connected");
    await client.close();
    res.sendStatus(200);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});
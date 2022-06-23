const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.route');
const authMiddleware = require('./src/middleware/auth.middleware');

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());


app.use('/auth', authRoutes);
app.use(authMiddleware.AuthGuard);

app.get('', (req, res) => {
    console.log("hello!");
    res.send("Hello!");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});
const express = require('express');
const app = express();
const Router = require('./Routes/todoRoutes');
const dbConnect = require('./Config/database');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is Active at ${PORT}`);
})

app.use(express.json());

app.use('/api/v1', Router);

app.get('/', (req, res) => {
    res.send("<h1>Hello From Backend</h1>");
})

dbConnect();
const mongoose = require('mongoose');

require('dotenv').config();

const url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/TodoDataBase';

const dbConnect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Connection Successfully Established.");
        })
        .catch((e) => {
            console.log("Connection Error Found : ", e);
        })
}

module.exports = dbConnect;
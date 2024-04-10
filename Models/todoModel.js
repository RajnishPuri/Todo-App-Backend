const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
})

module.exports = mongoose.model("Todo", Todo);
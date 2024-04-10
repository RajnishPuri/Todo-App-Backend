const Todo = require('../Models/todoModel');

exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todo,
            message: "Data Received Successfully."
        })

    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: "Data Couldn't Fetched."
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.find({ _id: id });
        res.status(200).json({
            success: true,
            data: todo,
            message: "Data Received Successfully."
        })
        if (!todo) {
            res.status(400).json({
                success: false,
                message: "Id is Not Valid"
            })
        }
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: "Data Couldn't Fetched."
        })
    }
}
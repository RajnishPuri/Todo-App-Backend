const Todo = require('../Models/todoModel');

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description });
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry Successfully Created"
        })
    }
    catch (e) {
        console.log("Entry Coundn't Created due to : ", e);
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}
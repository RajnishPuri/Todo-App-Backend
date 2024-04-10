const Todo = require('../Models/todoModel');

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete({ _id: id });
        res.status(200).json({
            success: true,
            data: todo,
            message: "Successfully Deleted."
        })
        if (!todo) {
            res.status(400).json({
                success: false,
                message: "Id is not Valid",
            })
        }
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: "Data Couldn't Fetched.",
        });
    }
}
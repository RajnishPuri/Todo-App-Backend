const Todo = require("../Models/todoModel");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            {
                title,
                description,
                updatedAt: Date.now()
            }
        );

        if (!todo) {
            res.status(400).json({
                success: false,
                message: "Id is Not Valid",
            });
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: "Successfully Updated.",
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Data Couldn't Fetched.",
        });
    }
};

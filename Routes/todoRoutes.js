const express = require("express");
const Router = express.Router();

const { createTodo } = require('../Controllers/createTodo');
const { getTodo, getTodoById } = require('../Controllers/getTodo');
const { updateTodo } = require('../Controllers/updateTodo');
const { deleteTodo } = require('../Controllers/DeleteTodo');


Router.post('/createTodo', createTodo);
Router.get('/getTodo', getTodo);
Router.get('/getTodo/:id', getTodoById);
Router.put('/updateTodo/:id', updateTodo);
Router.delete('/deleteTodo/:id', deleteTodo);

module.exports = Router;
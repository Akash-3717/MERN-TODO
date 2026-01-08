
const ItemController = require('../controller/ItemController')

// External Module
const express = require('express');
const ItemRouter = express.Router();

// Local Module

ItemRouter.get("/items", ItemController.getTodoItems)
ItemRouter.post("/items", ItemController.postTodoItem)
ItemRouter.put("/items/:id", ItemController.updateTodoItem)
ItemRouter.delete("/items/:id", ItemController.deleteTodoItem)


module.exports = ItemRouter;
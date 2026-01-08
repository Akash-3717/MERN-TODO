const TodoItem = require('../model/TodoItem');

// Get all todo items
exports.getTodoItems = async (req, res, next) => {
    try {
        const todoItems = await TodoItem.find();
        res.status(200).json(todoItems);
    } catch(err) {
        res.status(500).json({message: "Fetching todo items failed!", error: err.message});
    }
}

// Create a new todo item
exports.postTodoItem = async (req, res, next) => {
    try {
        const todoItem = new TodoItem(req.body);
        const savedItem = await todoItem.save();
        res.status(201).json(savedItem);
    } catch(err) {
        res.status(500).json({message: "Creating todo item failed!", error: err.message});
    }
}

// Update a todo item
exports.updateTodoItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedItem = await TodoItem.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedItem) {
            return res.status(404).json({message: "Todo item not found!"});
        }
        res.status(200).json(updatedItem);
    } catch(err) {
        res.status(500).json({message: "Updating todo item failed!", error: err.message});
    }
}

// Delete a todo item
exports.deleteTodoItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedItem = await TodoItem.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({message: "Todo item not found!"});
        }
        res.status(200).json({message: "Todo item deleted successfully!", deletedItem});
    } catch(err) {
        res.status(500).json({message: "Deleting todo item failed!", error: err.message});
    }
}
    
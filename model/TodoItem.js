
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
task: {
        type: String,
        required: true
        },
 date: {
    type: Date,
    required: true
    },
completed: {
    type: Boolean,
    default: false
    },
createdAt: {
    type: Date,
    default: Date.now
    },
    
});

  

module.exports = mongoose.model('TodoItem', todoSchema);
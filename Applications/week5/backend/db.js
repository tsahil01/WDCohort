const mongoose = require('mongoose')

mongoose.connect('')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema)

module.exports = {
    todo
}



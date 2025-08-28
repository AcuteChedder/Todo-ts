import {Schema, model} from 'mongoose'

const TodoSchema = new Schema({
    title: String
})

const Todo = model('Todo', TodoSchema)

export default Todo
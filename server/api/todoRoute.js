import { Router } from 'express'
import Todo from '../models/Todo.js'

const router = Router()

router.post('/add', async (req,res) => {
    try {
        const { title } = req.body
        const todo = new Todo({title})
        await todo.save()
        res.status(201).json({message: 'new task added'})
    } catch (error) {
        res.status(500).json({err: error.message})
    }
})

export default router
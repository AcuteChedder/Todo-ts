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
        console.log('Ошибка сервера добавления', error)
    }
})

router.get('/check', async (req, res) => {
    try {
        const data = await Todo.find()
        res.send(data)
    } catch (error) {
        console.log('Ошибка сервера получения', error)
    }
})

router.delete('/delete/:id', async (req,res) => {
    try {
        const { id } = req.params
        const deleteTodo = await Todo.findByIdAndDelete(id)

        if(!deleteTodo) {
            console.log('Задача не найдена')
        }

        res.json({message: 'Задача успешно удалена', todo: deleteTodo})
    } catch (error) {
        console.log('Ошибка при удалении', error)
    }
})

export default router
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const port = 3000

const app = express()
app.use(express.json())
app.use(cors)

mongoose.connect('mongodb://127.0.0.1:27017/Todos')
    .then(() => console.log('Подключение к MongoDB успешно'))
    .catch((err) => console.error('Ошибка подключения к MongoDB:', err));

app.listen(port, () => console.log(`Сервер запущен на порте ${port}`))
import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
axios.defaults.baseURL = 'http://localhost:3000'

interface todoInterface {
    _id: string,
    title: string,
}

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<todoInterface[]>([
        {
            _id: '',
            title: ''
        }
    ]) 

    const getTasks = async () => {
        const response = await axios.get('/api/check')
        todos.value = response.data
    }

    const createTodo = async (title: string) => {
        await axios.post('/api/add', {
            title: title
        })
        await getTasks()
    }

    const deleteTodo = async (id: string) => {
        await axios.delete(`/api/delete/${id}`)
        todos.value = todos.value.filter(todo => todo._id !== id)
    }

    return { todos, createTodo, getTasks, deleteTodo }
})
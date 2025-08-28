<script lang="ts" setup>
import { ref } from 'vue';
import TodoTask from './TodoTask.vue';
import axios from "axios"
axios.defaults.baseURL = 'http://localhost:3000'

const task = ref<string>('')

const addTask = async () => {
    try {
        await axios.post('/add', {
            task: task.value
        })
        console.log('new task added')
    } catch (error) {
        console.log(error.response.data.error)
    }
}
</script>

<template>
    <main class="main">
        <div class="todo">
            <h1 class="todo__title">Your Tasks</h1>

            <div class="todo__list">
                <TodoTask />
            </div>

            <div class="todo__create">
                <input v-model="task" type="text" class="todo__create-input">
                <button class="todo__create-btn" @click="addTask">Add</button>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .todo {
        padding: 20px 30px;
        background-color: #fff;
        width: 400px;
        height: 500px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        &__title {
            text-align: center;
            margin-bottom: 20px;
        }

        &__create {
            display: flex;

            &-input {
                width: 100%;
                padding-block: 8px;
                padding-inline: 2px;
                font-size: 16px;
            }

            &-btn {
                padding: 10px;
                font-weight: 700;
                background-color: greenyellow;
                cursor: pointer;
            }
        }
    }
</style>

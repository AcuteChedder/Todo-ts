<script lang="ts" setup>
import { useTodoStore } from '@/stores/todoStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const getTodos = useTodoStore()
const { todos } = storeToRefs(getTodos)

const removeTodo = (id: string) => {
    getTodos.deleteTodo(id)
}

onMounted(() => {
    getTodos.getTasks()
})
</script>

<template>
    <div class="task" v-for="todo in todos" :key="todo._id">
        <h1 class="task__title">{{ todo.title }}</h1>
        <button class="task__btn" @click="removeTodo(todo._id)">D</button>
    </div>
</template>

<style lang="scss" scoped>
    .task {
        padding: 5px 10px;
        background-color: #fff0ae;
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        &__btn {
            padding: 2px 12px;
            background-color: #fa4343;
            font-weight: 800;
            border: none;
            font-size: 16px;
            cursor: pointer;
        }
    }
</style>

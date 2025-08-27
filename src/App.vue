<script setup lang="ts">
import TodoList from './components/TodoList.vue';
</script>

<template>
  <main class="layout">
    <TodoList />
  </main>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  background-color: #fff5df;
}

.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>

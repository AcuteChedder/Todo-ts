<script lang="ts" setup>

</script>

<template>
    <div class="task">
        <h1 class="task__title">Помыть посуду</h1>
        <button class="task__btn">D</button>
    </div>
</template>

<style lang="scss" scoped>
    .task {
        padding: 5px 10px;
        background-color: #fff0ae;
        display: flex;
        justify-content: space-between;

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

<script lang="ts" setup>
defineProps<{
  tasks: {description: string, dueDate: Date}[]
}>()
</script>

<template>
  <div class="task-list">
    <h1>Task List</h1>

    <template v-for="task in tasks" :key="task.description">
      {{ task }}
    </template>
  </div>
</template>

<style>
</style>
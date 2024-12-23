<script lang="ts" setup>
import TaskItem from './TaskItem.vue';

defineProps<{
  tasks: {description: string, dueDate?: Date, completed: boolean}[]
}>()
</script>

<template>
  <div class="task-list">
    <template v-for="task in tasks" :key="task.description">
      <TaskItem :task="task" />
    </template>
  </div>
</template>

<style>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
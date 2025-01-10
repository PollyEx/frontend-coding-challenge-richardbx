<script setup lang="ts">
import TaskForm from './TaskForm.vue'
import { TaskChange } from './task'

const emit = defineEmits<{
  taskChange: [data: TaskChange]
}>()

function emitTaskChange(change: TaskChange): void {
  emit('taskChange', change)
}
</script>

<template>
  <TaskForm @taskChange="emitTaskChange"></TaskForm>
</template>

<style scoped></style>

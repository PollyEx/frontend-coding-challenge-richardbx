<script setup lang="ts">
import TaskForm from './TaskForm.vue'
import { Task } from '../domain'
import { TaskChange } from './task.ts'

const { task } = defineProps<{
  task: Task
}>()
const emit = defineEmits<{
  taskChange: [data: TaskChange]
}>()

function emitTaskChange(change: TaskChange): void {
  emit('taskChange', change)
}
</script>

<template>
  <TaskForm :task="task" @taskChange="emitTaskChange">Update Task</TaskForm>
</template>

<style scoped></style>

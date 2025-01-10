<script lang="ts" setup>
import TaskItem from './TaskItem.vue'
import { Task } from '../../app/tasks/domain'
import { ActionEvent } from './TaskItem.vue'

defineProps<{
  cardStyle?: String
  tasks: Task[]
}>()
const emit = defineEmits<{
  action: [event: ActionEvent]
}>()

function emitAction(action: ActionEvent) {
  emit('action', action)
}
</script>

<template>
  <div class="task-list">
    <template v-for="task in tasks" :key="task.description">
      <TaskItem :cardStyle="cardStyle" :task="task" @action="emitAction" />
    </template>
  </div>
</template>

<style>
.task-list > * + * {
  margin-top: var(--margin-sm);
}
</style>

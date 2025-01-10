<script setup lang="ts">
import { reactive, ref } from 'vue'

import CardContainer from './components/CardContainer.vue'
import TaskBotIcon from './assets/TaskBotIcon.svg'
import Tasks from './app/tasks/user-interface/Tasks.vue'

const newDescription = ref<string>()
const newDueDate = ref<Date>()
const tasks = reactive<any[]>([])

function clearForm(): void {
  newDescription.value = undefined
  newDueDate.value = undefined
}

function close(): void {
  tasks.splice(0, tasks.length)
  clearForm()
}
</script>

<template>
  <CardContainer class="app__card" @close="close">
    <template #heading>
      <div class="app__heading">
        <TaskBotIcon class="app__icon" />
        <span>TaskBot</span>
      </div>
    </template>
    <Tasks></Tasks>
  </CardContainer>
</template>

<style>
.app__card {
  margin-top: 10rem;
  width: 700px;
}

.app__heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.app__icon {
  height: 34px;
  flex-shrink: 0;
}
</style>

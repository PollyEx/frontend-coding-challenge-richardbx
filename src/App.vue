<script setup lang="ts">
import CardContainer from './components/CardContainer.vue'
import TaskBotIcon from './assets/TaskBotIcon.svg'
import CalendarIcon from './assets/CalendarIcon.svg'
import ClipboardIcon from './assets/ClipboardIcon.svg'
import ActionButton from './components/ActionButton.vue'
import FormInput from './components/FormInput.vue'
import { reactive } from 'vue'

const tasks = reactive([])

function createTask(): void {
  
}
</script>

<template>
  <CardContainer class="app__card">
    <template #heading>
      <div class="app__heading">
        <TaskBotIcon class="app__icon" />
        <span>TaskBot</span>
      </div>
    </template>

    <div class="app__body">
      <form class="app__form" @submit.prevent="createTask">
        <FormInput placeholder="Task">
          <template #icon>
            <ClipboardIcon />
          </template>
        </FormInput>

        <FormInput type="date" placeholder="Due Date">
          <template #icon>
            <CalendarIcon />
          </template>
        </FormInput>

        <ActionButton type="submit">Add Task</ActionButton>
      </form>

      <template v-if="tasks.length">
        {{ tasks }}
      </template>
    </div>
  </CardContainer>
</template>

<style>
.app__card {
  margin-top: 10rem;
}

.app__heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.app__body {
  display: flex;
  gap: 2rem;
}

.app__icon {
  height: 34px;
  flex-shrink: 0;
}

.app__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
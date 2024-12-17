<script setup lang="ts">
import CardContainer from './components/CardContainer.vue';
import TaskBotIcon from './assets/TaskBotIcon.svg'
import ActionButton from './components/ActionButton.vue';

</script>

<template>
  <CardContainer class="app__card">
    <template #heading>
      <div class="app__heading">
        <TaskBotIcon class="app__icon" />
        <span>TaskBot</span>
      </div>
    </template>

    <ActionButton>
      Add Task
    </ActionButton>
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

.app__icon {
  height: 34px;
  flex-shrink: 0;
}
</style>
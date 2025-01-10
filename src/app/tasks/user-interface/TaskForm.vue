<script setup lang="ts">
import dayjs from 'dayjs'

import { ref, watch } from 'vue'

import FormInput from '../../../components/FormInput.vue'
import CalendarIcon from '../../../assets/CalendarIcon.svg'
import ActionButton from '../../../components/ActionButton.vue'
import ClipboardIcon from '../../../assets/ClipboardIcon.svg'
import { Task } from '../domain'
import { TaskChange } from './task.ts'

const { task } = defineProps<{
  task?: Task
}>()

const emit = defineEmits<{
  taskChange: [data: TaskChange]
}>()

const description = ref<string>()
const dueDate = ref<Date>()

function emitTask(): void {
  emit('taskChange', new TaskChange(description.value, dueDate.value))

  clearForm()
}

function clearForm(): void {
  description.value = undefined
  dueDate.value = undefined
}

watch(
  () => task,
  (val) => {
    if (val) {
      description.value = val.description
      dueDate.value = dayjs(val.dueDate).format('YYYY-MM-DD')
    }
  },
  { immediate: true }
)
</script>

<template>
  <form class="app__form" @submit.prevent="emitTask">
    <FormInput placeholder="Task" v-model="description">
      <template #icon>
        <ClipboardIcon />
      </template>
    </FormInput>

    <FormInput type="date" placeholder="Due Date" v-model="dueDate">
      <template #icon>
        <CalendarIcon />
      </template>
    </FormInput>

    <ActionButton type="submit"><slot>Add Task</slot></ActionButton>
  </form>
</template>

<style scoped>
.app__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>

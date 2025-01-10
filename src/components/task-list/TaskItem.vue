<!--suppress ES6PreferShortImport -->
<script lang="ts" setup>
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

import { computed, ref } from 'vue'

import SquareIcon from '../../assets/SquareIcon.svg'
import CheckedIcon from '../../assets/CheckedIcon.svg'
import EllipsisIcon from '../../assets/EllipsisIcon.svg'
import {
  isToday,
  isTomorrow,
  isYesterday,
  isThisWeek
} from '../../util/date.ts'
import Badge from '../Badge.vue'
import Menu from '../Menu.vue'
import List from '../list/List.vue'
import ListItem from '../list/ListItem.vue'
import { Task } from '../../app/tasks/domain/task.ts'
import IconButton from '../IconButton.vue'

dayjs.extend(isoWeek)

export interface ActionEvent {
  action: string
  task: Task
}

const { cardStyle, task } = defineProps<{
  cardStyle?: String
  task: Task
}>()
const emit = defineEmits<{
  action: [event: ActionEvent]
}>()

const menuOpen = ref(false)

const isComplete = computed(() => {
  return task.status.indexOf('complete') > -1
})
const dateDisplay = computed(() => {
  if (isToday(task.dueDate)) {
    return 'Today'
  } else if (isYesterday(task.dueDate)) {
    return 'Yesterday'
  } else if (isTomorrow(task.dueDate)) {
    return 'Tomorrow'
  } else if (isThisWeek(task.dueDate)) {
    return dayjs(task.dueDate).format('dddd')
  } else {
    return dayjs(task.dueDate).format('MMM D')
  }
})
const urgencyColor = computed(() => {
  if (cardStyle === 'basic') {
    return 'info'
  }
  if (isTomorrow(task.dueDate)) {
    return 'warning'
  } else if (
    isToday(task.dueDate) ||
    dayjs(task.dueDate).isBefore(dayjs(), 'day')
  ) {
    return 'danger'
  } else {
    return 'success'
  }
})

function deleteComplete() {
  const index = task.status.indexOf('complete')
  task.status.splice(index, 1)
}

function emitAction(action: 'delete' | 'edit') {
  emit('action', { action, task })
  menuOpen.value = false
}

function setComplete() {
  if (task.status.indexOf('complete') === -1) {
    task.status.push('complete')
  }
}
</script>

<template>
  <div class="task-item" :class="{ 'task-item--basic': cardStyle === 'basic' }">
    <div class="task-item__check">
      <template v-if="isComplete">
        <CheckedIcon
          class="task-item__check-icon task-item__check-icon--checked"
          @click="deleteComplete()"
        />
      </template>
      <template v-else>
        <SquareIcon class="task-item__check-icon" @click="setComplete()" />
      </template>
    </div>
    <div
      class="task-item__description"
      :class="{ 'task-item__description--checked': isComplete }"
    >
      {{ task.description }}
    </div>
    <Badge :color="urgencyColor">{{ dateDisplay }}</Badge>
    <div class="task-item__menu">
      <Menu v-model:open="menuOpen" position="right">
        <IconButton><EllipsisIcon /></IconButton>
        <template #menu>
          <List :interactive="true">
            <ListItem @click="emitAction('edit')">Edit</ListItem>
            <ListItem @click="emitAction('delete')">Delete</ListItem>
          </List>
        </template>
      </Menu>
    </div>
  </div>
</template>

<style>
.task-item {
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  height: 56px;
  min-width: 180px;
  gap: 1rem;
  border-radius: 6px;
  border: 1px solid var(--colors-grey-200);
  background: white;
}

.task-item--basic {
  border: none;
  background: none;
  height: 48px;
}

.task-item__description {
  flex-grow: 1;
}

.task-item__description--checked {
  text-decoration: line-through;
}

.task-item__check-icon {
  cursor: pointer;
  width: 20px;
}

.task-item__check-icon--checked {
  fill: var(--colors-blue-500);
}
</style>

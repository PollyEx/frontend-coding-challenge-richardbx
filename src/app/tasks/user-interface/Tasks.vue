<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import EllipsisIcon from '../../../assets/EllipsisIcon.svg'
import ActionButton from '../../../components/ActionButton.vue'
import BlockSection from '../../../components/BlockSection.vue'
import Caption from '../../../components/typography/Caption.vue'
import ChipList from '../../../components/chips/ChipList.vue'
import ChipOption from '../../../components/chips/ChipOption.vue'
import Dialog from '../../../components/dialog/Dialog.vue'
import EditTask from './EditTask.vue'
import Menu from '../../../components/Menu.vue'
import NewTask from './TaskForm.vue'
import List from '../../../components/list/List.vue'
import ListItem from '../../../components/list/ListItem.vue'
import PageSection from '../../../components/PageSection.vue'
import TaskList from '../../../components/task-list/TaskList.vue'
import Section from '../../../components/Section.vue'
import { Task } from '../domain'
import SectionHeadline from '../../../components/typography/SectionHeadline.vue'
import IconButton from '../../../components/IconButton.vue'
import { ActionEvent } from '../../../components/task-list/TaskItem.vue'
import { TaskChange } from './task.ts'
import CardContainer from '../../../components/CardContainer.vue'
import EmptyState from '../../../components/EmptyState.vue'

const filters = ['All', 'Completed', 'Incomplete']

const dialogMode = ref('')
const dialogOpen = ref(false)
const displayMode = ref('together')
const editingTask = ref(new Task())
const filter = ref('All')
const menuOpen = ref(false)
const tasks = reactive<Task[]>([])

const visibleTasks = computed(() => {
  switch (filter.value) {
    case 'Completed':
      return completeTasks.value
    case 'Incomplete':
      return incompleteTasks.value
    default:
      return tasks
  }
})

const completeTasks = computed(() => {
  return tasks.filter((task) => task.status.indexOf('complete') > -1)
})
const incompleteTasks = computed(() => {
  return tasks.filter((task) => task.status.indexOf('complete') === -1)
})

function handleAction(event: ActionEvent) {
  if (event.action === 'edit') {
    dialogMode.value = 'edit'
    editingTask.value = event.task
    dialogOpen.value = true
  } else if (event.action === 'delete') {
    const index = tasks.findIndex((t) => t.id === event.task.id)
    tasks.splice(index, 1)
  }
}

function addTask(change: TaskChange) {
  tasks.push(new Task(change.description, change.dueDate))
  dialogOpen.value = false
}

function openDialog(): void {
  dialogMode.value = 'add'
  dialogOpen.value = true
}

function setDisplayMode(mode: string) {
  displayMode.value = mode
  menuOpen.value = false
}

function setFilter(val: string) {
  filter.value = val
}

function updateTask(change: TaskChange) {
  editingTask.value.description = change.description
  editingTask.value.dueDate = change.dueDate
  dialogOpen.value = false
  editingTask.value = new Task()
}
</script>

<template>
  <div class="app__tasks-container">
    <CardContainer cardStyle="flat">
      <PageSection>
        <BlockSection :horizontal="true">
          <h1>Task List</h1>
          <Menu v-model:open="menuOpen">
            <IconButton><EllipsisIcon /></IconButton>
            <template #menu>
              <List :interactive="true">
                <ListItem
                  v-if="displayMode === 'together'"
                  @click="setDisplayMode('seperate')"
                  >Separate completed tasks</ListItem
                >
                <ListItem v-else @click="setDisplayMode('together')"
                  >Show tasks together</ListItem
                >
              </List>
            </template>
          </Menu>
        </BlockSection>
        <Section>
          <div class="flex-center">
            <BlockSection v-if="displayMode === 'together'" :horizontal="true">
              <Caption>Filter</Caption>
              <ChipList>
                <ChipOption
                  v-for="f in filters"
                  :selected="filter === f"
                  @click="setFilter(f)"
                  >{{ f }}</ChipOption
                >
              </ChipList>
            </BlockSection>
            <div class="spacer"></div>
            <ActionButton :filled="true" @click="openDialog"
              >Add task</ActionButton
            >
          </div>
          <template v-if="tasks.length">
            <template v-if="displayMode === 'together'">
              <template v-if="visibleTasks.length">
                <TaskList :tasks="visibleTasks" @action="handleAction" />
              </template>
              <template v-else-if="filter === 'Completed'">
                <EmptyState>You haven't completed any tasks.</EmptyState>
              </template>
              <template v-else>
                <EmptyState>You have completed all your tasks!</EmptyState>
              </template>
            </template>
            <template v-else>
              <TaskList :tasks="incompleteTasks" @action="handleAction" />
              <BlockSection v-if="completeTasks.length">
                <SectionHeadline>Completed Tasks</SectionHeadline>
                <TaskList
                  card-style="basic"
                  :tasks="completeTasks"
                  @action="handleAction"
                />
              </BlockSection>
            </template>
          </template>
          <template v-else>
            <EmptyState>Woohoo! You have no tasks!</EmptyState>
          </template>
        </Section>
      </PageSection>
    </CardContainer>
  </div>
  <Dialog
    :title="dialogMode === 'add' ? 'New Task' : 'Edit Task'"
    v-model:open="dialogOpen"
  >
    <div class="app__form-container">
      <template v-if="dialogMode === 'add'">
        <NewTask @taskChange="addTask"></NewTask>
      </template>
      <template v-else>
        <EditTask :task="editingTask" @taskChange="updateTask"></EditTask>
      </template>
    </div>
  </Dialog>
</template>

<style scoped></style>

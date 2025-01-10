<script setup lang="ts">
import { ref, watch } from 'vue'
import CloseButton from '../CloseButton.vue'

const open = defineModel('open')
const { title } = defineProps<{
  title: string
}>()

const dialog = ref(null)

watch(
  open,
  (o) => {
    if (dialog.value) {
      if (o) {
        openDialog()
      } else {
        closeDialog()
      }
    }
  },
  { immediate: true }
)

function openDialog() {
  dialog.value.showModal()
  dialog.value.addEventListener('click', dismissOnClickOutside)
}

function closeDialog() {
  dialog.value.close()
  open.value = false
}

function dismissOnClickOutside(event) {
  if (event.target.tagName === 'DIALOG') {
    const rect = event.target.getBoundingClientRect()

    const clickedInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width

    if (!clickedInDialog) {
      closeDialog()
    }
  }
}
</script>

<template>
  <dialog ref="dialog" class="elevation-1">
    <div class="flex-center">
      <h1>{{ title }}</h1>
      <div class="spacer"></div>
      <CloseButton @close="closeDialog"></CloseButton>
    </div>
    <div class="dialog__content">
      <slot></slot>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  position: relative;
  min-width: 320px;
  min-height: 320px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  padding: 2rem;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.3);
}

.dialog__content {
  margin-top: 2rem;
}
</style>

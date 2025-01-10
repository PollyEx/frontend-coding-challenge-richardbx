<script setup lang="ts">
import CloseIcon from '../assets/CloseIcon.svg'

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <button type="button" class="close-container">
    <CloseIcon @click="emit('close')" />
  </button>
</template>

<style scoped>
.close-container {
  fill: var(--colors-grey-700);
}

.close-container:hover {
  fill: var(--colors-grey-black);
}

.card-container svg {
  width: 18px;
}
</style>

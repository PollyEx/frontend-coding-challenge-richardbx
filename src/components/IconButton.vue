<script setup lang="ts">
import { computed } from 'vue'

const { size = 'md' } = defineProps<{
  size?: string
}>()

const sizeClass = computed(() => {
  return `icon-button--${size}`
})
</script>

<template>
  <div class="icon-button" :class="sizeClass">
    <slot></slot>
  </div>
</template>

<style scoped>
.icon-button {
  cursor: pointer;
}

.icon-button--md {
  width: 20px;
}
</style>

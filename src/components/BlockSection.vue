<script setup lang="ts">
import { computed } from 'vue'
const { horizontal = false } = defineProps<{
  horizontal?: Boolean
}>()

const sectionClass = computed(() => {
  return horizontal ? 'block-section--horizontal' : 'block-section'
})
</script>

<template>
  <div :class="sectionClass">
    <slot></slot>
  </div>
</template>

<style scoped>
.block-section > * + * {
  margin-top: var(--margin-sm);
}

.block-section--horizontal {
  align-items: center;
  display: flex;
}

.block-section--horizontal > * + * {
  margin-left: var(--margin-sm);
}
</style>

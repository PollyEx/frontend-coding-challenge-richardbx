<script setup lang="ts">
import { computed } from 'vue'

const { color = 'info' } = defineProps<{
  color?: String
}>()

const colorClass = computed(() => {
  return `badge--${color}`
})
</script>

<template>
  <div class="badge" :class="colorClass">
    <slot></slot>
  </div>
</template>

<style scoped>
.badge {
  font-size: var(--caption-font-size);
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
  background: var(--colors-grey-200);
}

.badge--info {
  background: var(--background-info);
}

.badge--success {
  background: var(--background-success);
}

.badge--warning {
  background: var(--background-warning);
}

.badge--danger {
  background: var(--background-danger);
}
</style>

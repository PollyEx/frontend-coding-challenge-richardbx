<script setup lang="ts">
const { selected = false } = defineProps<{
  selected?: Boolean
}>()
</script>

<template>
  <div class="chip-option" :class="{ 'chip-option--selected': selected }">
    <slot></slot>
  </div>
</template>

<style scoped>
.chip-option {
  cursor: pointer;
  font-size: var(--caption-font-size);
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
}

.chip-option--selected {
  background: var(--active-background-color);
}
</style>

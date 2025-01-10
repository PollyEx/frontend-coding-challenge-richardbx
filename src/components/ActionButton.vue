<script lang="ts" setup>
const { filled = false } = defineProps<{
  filled?: Boolean
}>()
</script>

<template>
  <button
    type="button"
    class="action-button"
    :class="{ 'action-button--filled': filled }"
  >
    <slot />
  </button>
</template>

<style>
.action-button {
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: var(--colors-blue-50);
  color: var(--colors-blue-500);
}

.action-button:hover {
  background-color: var(--colors-blue-100);
}

.action-button--filled {
  background-color: var(--secondary-background-color);
  color: var(--light-primary-text);
}

.action-button--filled:hover {
  background-color: var(--secondary-background-color);
}
</style>

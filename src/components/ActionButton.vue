<script lang="ts" setup>
</script>

<template>
  <button type="button" class="action-button">
    <slot />
  </button>
</template>

<style>
.action-button {
  border-radius: 32px;
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: var(--colors-blue-50);
  color: var(--colors-blue-500);
}

.action-button:hover {
  background-color: var(--colors-blue-100);
}
</style>
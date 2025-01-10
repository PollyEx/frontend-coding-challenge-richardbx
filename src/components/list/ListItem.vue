<script setup lang="ts">
import { inject } from 'vue'

const interactive = inject('interactive')
</script>

<template>
  <div class="list-item" :class="{ 'list-item--interactive': interactive }">
    <slot></slot>
  </div>
</template>

<style scoped>
.list-item {
  align-items: center;
  display: flex;
  height: 48px;
  padding: 0 16px;
  white-space: nowrap;
}

.list-item--interactive {
  cursor: pointer;
}

.list-item--interactive:hover {
  background: var(--primary-background-color);
}
</style>

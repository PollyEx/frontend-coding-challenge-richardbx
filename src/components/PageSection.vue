<script setup lang="ts"></script>

<template>
  <div class="page-section">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-section > * + * {
  margin-top: var(--margin-lg);
}
</style>

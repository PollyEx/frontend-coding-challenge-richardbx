<script setup lang="ts"></script>

<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<style scoped>
.section > * + * {
  margin-top: var(--margin-md);
}
</style>

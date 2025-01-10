<script setup lang="ts"></script>

<template>
  <div class="section-headline">
    <slot></slot>
  </div>
</template>

<style scoped>
.section-headline {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: var(--headline-text-color);
}
</style>

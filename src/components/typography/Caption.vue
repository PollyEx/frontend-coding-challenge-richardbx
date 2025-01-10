<script setup lang="ts"></script>

<template>
  <div class="caption">
    <slot></slot>
  </div>
</template>

<style scoped>
.caption {
  color: var(--caption-color);
  font-size: var(--caption-font-size);
  line-height: 1;
}
</style>

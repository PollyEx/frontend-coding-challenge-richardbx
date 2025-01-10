<script setup lang="ts"></script>

<template>
  <div class="empty-state">
    <slot></slot>
  </div>
</template>

<style scoped>
.empty-state {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 240px;
}
</style>

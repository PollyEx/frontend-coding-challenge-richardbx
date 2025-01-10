<script setup lang="ts"></script>

<template>
  <div class="chip-list">
    <slot></slot>
  </div>
</template>

<style scoped>
.chip-list {
  align-items: center;
  display: flex;
}

.chip-list > * + * {
  margin-left: 10px;
}
</style>

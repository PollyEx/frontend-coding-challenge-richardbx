<script setup lang="ts">
import { provide } from 'vue'

const { interactive = false } = defineProps<{
  interactive?: Boolean
}>()

provide('interactive', interactive)
</script>

<template>
  <slot></slot>
</template>

<style scoped></style>

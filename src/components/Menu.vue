<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const { position = 'left' } = defineProps<{
  position?: string
}>()
const open = defineModel('open')

const menu = ref(null)
onClickOutside(menu, () => {
  open.value = false
})

const positionClass = position === 'left' ? 'menu--left' : 'menu--right'

function toggleMenu() {
  open.value = !open.value
}
</script>

<template>
  <div ref="menu" class="menu-container">
    <div class="menu-target" @click="toggleMenu"><slot></slot></div>
    <div v-if="open" class="menu elevation-1" :class="positionClass">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  position: relative;
}

.menu {
  position: absolute;
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem 0;
  min-width: 200px;
  z-index: 1000;
  animation: fadeIn 0.2s;
}

.menu--right {
  right: 0;
}
</style>

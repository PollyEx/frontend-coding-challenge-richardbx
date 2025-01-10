<script lang="ts" setup>
import { computed } from 'vue'

const { cardStyle } = defineProps<{
  cardStyle?: String
}>()

const cardClass = computed(() => {
  return cardStyle === 'flat' ? 'card-container--flat' : ''
})
</script>

<template>
  <div class="card-container" :class="cardClass">
    <div class="card-container__header">
      <slot name="heading" />
    </div>

    <div class="card-container__body">
      <slot />
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex block;
  flex-direction: column;
  border-radius: 24px;
  gap: 2rem;
  background-color: var(--colors-grey-white);
  padding: 2rem;
}

.card-container__header {
  color: var(--colors-blue-500);
  fill: var(--colors-blue-500);
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  align-items: center;
}

.card-container__body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card-container--flat {
  background-color: var(--primary-background-color);
  gap: 0;
  padding-top: 1rem;
}
</style>

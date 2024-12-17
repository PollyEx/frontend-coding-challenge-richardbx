<script lang="ts" setup>
import CloseIcon from '../assets/CloseIcon.svg'
</script>

<template>
  <div class="card-container">
    <div class="card-container__header">
      <slot name="heading" />
      <button type="button" class="card-container__close">
        <CloseIcon class="card-container__close" />
      </button>
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
  background-color: var(--colors-grey-white);
  width: 100%;
}

.card-container__header {
  color: var(--colors-blue-500);
  fill: var(--colors-blue-500);
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  padding: 2rem;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  align-items: center;
}

.card-container__body {
  padding: 2rem;
}

.card-container__close {
  fill: var(--colors-grey-black);
  flex-shrink: 0;
  width: 18px;
}
</style>
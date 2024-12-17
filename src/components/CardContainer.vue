<script lang="ts" setup>
import CloseIcon from '../assets/CloseIcon.svg'
</script>

<template>
  <div class="card-container">
    <div class="card-container__header">
      <slot name="heading" />
      <button type="button" class="card-container__close">
        <CloseIcon />
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
  gap: 2rem;
  background-color: var(--colors-grey-white);
  padding: 2rem;
  width: 100%;
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
  gap: 2rem;
}

.card-container__close {
  fill: var(--colors-grey-700);
  flex-shrink: 0;
}

.card-container__close:hover {
  fill: var(--colors-grey-black);
}

.card-container__close svg {
  width: 18px;
}
</style>
<script lang="ts" setup>
import { useAttrs } from 'vue';

const model = defineModel()

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()
</script>

<template>
  <div class="form-input">
    <div class="form-input__icon">
      <slot name="icon" />
    </div>
    
    <input type="text" class="form-input__control" v-model="model" v-bind="attrs" />
  </div>
</template>

<style>
.form-input {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 32px;
  padding: 0.5rem 1rem;
  align-self: stretch;
  border: 1px solid var(--colors-grey-300);
}

.form-input:focus-within {
  outline: 1px solid var(--colors-blue-500);
  border-color: var(--colors-blue-500);
}

.form-input__icon svg {
  fill: var(--colors-grey-700);
  flex-shrink: 0;
  width: 12px;
}

.form-input__control {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.1rem;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>
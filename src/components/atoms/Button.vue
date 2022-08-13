<template>
  <button :disabled="disabled" :type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
interface ButtonProps {
  disabled?: boolean;
  type?: 'submit' | 'button';
}
defineProps<ButtonProps>();
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.5rem;
  padding: 0 1.8rem;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  font-weight: 700;

  border-radius: 6px;
  font-size: 15px;

  border: 0;
  outline: none;

  &:disabled {
    opacity: 0.5;
  }
}
</style>

<template>
  <div class="form-container">
    <label for="">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}

defineProps<InputProps>();
</script>

<style lang="scss" scoped>
div.form-container {
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    font-size: 2rem;
    display: block;
    margin-bottom: 3rem;
  }

  input {
    height: 3rem;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--color-primary);

    &::placeholder {
      font-size: 15px;
      color: var(--color-primary-light);
    }
  }
}

@media (min-width: 700px) {
  div.form-container {
    label {
      font-size: 3.2rem;
    }

    input {
      height: 5rem;
      font-size: 2.8rem;
      &::placeholder {
        font-size: 2.8rem;
      }
    }
  }
}
</style>

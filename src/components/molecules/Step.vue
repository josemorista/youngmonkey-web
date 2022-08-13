<template>
  <div class="step-container">
    <div class="step-number">
      <p>{{ stepNumber }}</p>
      <img src="/assets/arrow.svg" alt="arrow" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface StepProps {
  stepNumber: number;
}
defineProps<StepProps>();
</script>

<style scoped lang="scss">
.step-container {
  display: flex;
  align-items: flex-start;
  width: 100%;

  .step-number {
    display: flex;
    align-items: center;
    margin-right: 1rem;

    p {
      font-size: 2rem;
      margin-right: 0.6rem;
    }

    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}

@media (min-width: 700px) {
  .step-container {
    .step-number {
      padding-top: 0.6rem;
      p {
        font-size: 2.6rem;
      }
    }
  }
}
</style>

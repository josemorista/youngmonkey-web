<template>
  <footer class="footer-container">
    <Button :disabled="currentStep === 1" @click="onBeforeClick">
      <img src="/assets/chevron-up.svg" alt="" />
    </Button>
    <Button :disabled="currentStep === highestStep" @click="onNextClick">
      <img src="/assets/chevron-up.svg" alt="" />
    </Button>
  </footer>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Button from '../atoms/Button.vue';
import { useFormStep } from '../../compositors/formStep';
const formStepStore = useFormStep();
const { onBeforeClick, onNextClick } = formStepStore;
const { currentStep, highestStep } = toRefs(formStepStore);
</script>

<style lang="scss">
.footer-container {
  display: flex;
  width: 100%;
  justify-content: flex-end;

  button {
    padding: 0 1.6rem;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 1px solid var(--color-secondary);
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      img {
        transform: rotate(180deg);
      }
    }
  }
}
</style>

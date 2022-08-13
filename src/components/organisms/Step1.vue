<template>
  <Step :step-number="1">
    <div class="step1-content">
      <Input type="text" label="Qual seu nome?*" placeholder="Digite aqui..." />
      <Button @click="$emit('onStepSubmit')"> OK {{ '>' }} </Button>
    </div>
  </Step>
</template>

<script setup lang="ts">
import Input from '../atoms/Input.vue';
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { defineEmits } from 'vue';

defineEmits<{
  (event: 'onStepSubmit'): void;
}>();
</script>

<style scoped lang="scss">
.step1-content {
  width: 100%;
  > button {
    margin-top: 1.2rem;
  }
}
</style>

<template>
  <Step :step-number="2">
    <div class="step1-content">
      <Input
        type="text"
        label="Oi José, e qual sua empresa?"
        placeholder="Digite aqui..."
      />
      <Button> OK {{ '>' }} </Button>
    </div>
  </Step>
</template>

<script setup lang="ts">
import Input from '../atoms/Input.vue';
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
</script>

<style scoped lang="scss">
.step1-content {
  width: 100%;
  > button {
    margin-top: 1.2rem;
  }
}
</style>

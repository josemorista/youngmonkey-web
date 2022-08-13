<template>
  <Step :step-number="1">
    <form @submit.prevent="$emit('onStepSubmit', name)">
      <Input
        v-model="name"
        type="text"
        label="Qual seu nome?*"
        placeholder="Digite aqui..."
      />
      <Button type="submit"> OK {{ '>' }} </Button>
    </form>
  </Step>
</template>

<script setup lang="ts">
import Input from '../atoms/Input.vue';
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { defineEmits, defineProps, ref } from 'vue';
const props = defineProps<{
  initialValue: string;
}>();
defineEmits<{
  (event: 'onStepSubmit', value: string): void;
}>();
const name = ref(props.initialValue);
</script>

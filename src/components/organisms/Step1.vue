<template>
  <Step :step-number="1">
    <form @submit.prevent="$emit('onStepSubmit')">
      <Input
        v-model="formData.name"
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
import { defineEmits } from 'vue';
import { useFormData } from '@/compositors/formData';
defineEmits<{
  (event: 'onStepSubmit'): void;
}>();
const formData = useFormData();
</script>

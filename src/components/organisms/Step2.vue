<template>
  <Step :step-number="2">
    <form @submit.prevent="$emit('onStepSubmit')">
      <Input
        v-model="formData.enterprise"
        type="text"
        :label="`Oi ${formData.name}, e qual sua empresa?`"
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
  (event: 'onStepSubmit', value: string): void;
}>();
const formData = useFormData();
</script>

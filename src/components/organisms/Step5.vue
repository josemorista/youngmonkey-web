<template>
  <Step :step-number="5">
    <form @submit.prevent="$emit('onStepSubmit')">
      <Input
        v-model="formData.referenceImg"
        type="text"
        label="Possui algum vídeo ou imagem de referência?"
        placeholder="https://"
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

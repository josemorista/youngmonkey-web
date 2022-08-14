<template>
  <Step :step-number="7">
    <form @submit.prevent="$emit('onStepSubmit')">
      <Input
        v-model="formData.other"
        type="text"
        :label="`Pronto ${formData.name}, tem algo mais que você queira nos falar?`"
        placeholder="Digite sua resposta aqui."
      />
      <Button type="submit"> ENVIAR {{ '>' }} </Button>
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

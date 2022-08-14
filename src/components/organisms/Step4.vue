<template>
  <Step :step-number="3">
    <form @submit.prevent="$emit('onStepSubmit')">
      <AutoComplete
        :options="options"
        :selected="formData.requestedDuration"
        label="Qual a duração estimada do seu vídeo?"
        @on-option-click="onOptionSelection($event)"
      />
      <Button type="submit"> OK {{ '>' }} </Button>
    </form>
  </Step>
</template>

<script setup lang="ts">
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { defineEmits } from 'vue';
import { useFormData } from '@/compositors/formData';
import AutoComplete from '../atoms/AutoComplete.vue';
defineEmits<{
  (event: 'onStepSubmit'): void;
}>();

const formData = useFormData();

const options = [
  {
    label: '0-1 minuto',
    value: '0-1',
  },
  {
    label: '1-3 minutos',
    value: '1-3',
  },
  {
    label: '3-5 minutos',
    value: '3-5',
  },
  {
    label: '+ de 5 minutos',
    value: '+5',
  },
];

const onOptionSelection = (value: string) => {
  formData.requestedDuration = value;
};
</script>

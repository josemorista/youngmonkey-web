<template>
  <Step :step-number="3">
    <form @submit.prevent="$emit('onStepSubmit')">
      <MultipleInput
        :options="options"
        :selected="formData.contractOptions"
        label="Com quais serviços podemos te ajudar?*"
        legend="Escolha um ou mais serviços"
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
import MultipleInput from '../atoms/MultipleInput.vue';
import { useFormData } from '@/compositors/formData';
defineEmits<{
  (event: 'onStepSubmit'): void;
}>();

const formData = useFormData();

const options = [
  {
    label: 'Animação/ Motion Graphics',
    value: 'A',
  },
  {
    label: 'Edição de vídeo',
    value: 'B',
  },
  {
    label: 'Sound design',
    value: 'C',
  },
  {
    label: 'Roteiro',
    value: 'D',
  },
  {
    label: 'Narração / Locução',
    value: 'E',
  },
  {
    label: 'UX e UI Design',
    value: 'F',
  },
];

const onOptionSelection = (value: string) => {
  if (formData.contractOptions.some((el) => el === value)) {
    formData.contractOptions = formData.contractOptions.filter(
      (el) => el !== value
    );
  } else {
    formData.contractOptions.push(value);
  }
};
</script>

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
      <Button :disabled="isFormDisabled" type="submit"> OK {{ '>' }} </Button>
    </form>
  </Step>
</template>

<script setup lang="ts">
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { computed, defineEmits } from 'vue';
import MultipleInput from '../atoms/MultipleInput.vue';
import { useFormData } from '@/compositors/formData';
defineEmits<{
  (event: 'onStepSubmit'): void;
}>();

const formData = useFormData();

const isFormDisabled = computed(() => {
  return !formData.contractOptions.length;
});

const options = [
  {
    label: 'Animação/ Motion Graphics',
    value: 'Animação / Motion',
  },
  {
    label: 'Edição de Vídeo',
    value: 'Edição de Vídeo',
  },
  {
    label: 'Sound Design',
    value: 'Sound Design',
  },
  {
    label: 'Roteiro',
    value: 'Roteiro',
  },
  {
    label: 'Narração / Locução',
    value: 'Narração / Locução',
  },
  {
    label: 'UX e UI Design',
    value: 'UX e UI Design',
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

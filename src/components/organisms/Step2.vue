<template>
  <Step :step-number="2">
    <form @submit.prevent="$emit('onStepSubmit', enterpriseName)">
      <Input
        v-model="enterpriseName"
        type="text"
        :label="`Oi ${name}, e qual sua empresa?`"
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
  name: string;
}>();
defineEmits<{
  (event: 'onStepSubmit', value: string): void;
}>();
const enterpriseName = ref(props.initialValue);
</script>

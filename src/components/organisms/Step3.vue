<template>
  <Step :step-number="3">
    <form @submit.prevent>
      <Button type="submit"> OK {{ '>' }} </Button>
    </form>
  </Step>
</template>

<script setup lang="ts">
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { defineEmits, defineProps, ref } from 'vue';
const props = defineProps<{
  initialValue: Array<string>;
}>();
defineEmits<{
  (event: 'onStepSubmit', values: Array<string>): void;
}>();
const selectedValues = ref(props.initialValue);
</script>

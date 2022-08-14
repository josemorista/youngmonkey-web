import { ref, computed } from 'vue';

const currentStep = ref(1);
const highestStep = ref(1);
const completedPercentage = computed(() => ((highestStep.value - 1) / 7) * 100);

const onBeforeClick = () => {
  currentStep.value--;
};

const onNextClick = () => {
  currentStep.value++;
};

const onStepSubmit = (step: number) => {
  if (step === highestStep.value) {
    highestStep.value++;
  }
  onNextClick();
};

export const useFormStep = () => ({
  onBeforeClick,
  onNextClick,
  onStepSubmit,
  completedPercentage,
  currentStep,
  highestStep,
});

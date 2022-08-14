import { ref, computed } from 'vue';
import { useFormData } from './formData';

const currentStep = ref(1);
const highestStep = ref(1);
const completedPercentage = computed(() => ((highestStep.value - 1) / 7) * 100);

const onBeforeClick = () => {
  currentStep.value--;
};

const onNextClick = () => {
  currentStep.value++;
};

const onStepSubmit = async (step: number) => {
  if (step === highestStep.value) {
    highestStep.value++;
  }
  if (step === 7) {
    const formData = useFormData();
    const form = new FormData();
    form.append('entry.640831328', formData.name);
    form.append('entry.1481678986', formData.enterprise);
    for (const option of formData.contractOptions) {
      form.append('entry.1958347428', option);
    }
    form.append('entry.1056916052', formData.referenceImg);
    form.append('entry.462087437', formData.requestedDuration);
    form.append('entry.603675729', formData.phone);
    form.append('entry.391128899', formData.other);
    try {
      await fetch(
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdK6JSFNZjt1yXwmVKksxMS7IsvbeStjgRHa054_hjIQnlNYg/formResponse',
        {
          method: 'POST',
          body: form,
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
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

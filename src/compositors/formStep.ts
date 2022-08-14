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
    const body = new FormData();
    body.append('dlut', '1660482217655');
    body.append('entry.640831328', formData.name);
    body.append('entry.1481678986', formData.enterprise);
    for (const option of formData.contractOptions) {
      body.append('entry.1958347428', option);
    }
    body.append('entry.1056916052', formData.referenceImg);
    body.append('entry.462087437', formData.requestedDuration);
    body.append('entry.603675729', formData.phone);
    body.append('entry.391128899', formData.other);
    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdK6JSFNZjt1yXwmVKksxMS7IsvbeStjgRHa054_hjIQnlNYg/formResponse',
        {
          method: 'POST',
          body,
          mode: 'no-cors',
          redirect: 'follow',
          headers: {
            'Content-Type': 'application/json',
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

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
		body.append('entry.772671732', formData.name);
		body.append('entry.1777026839', formData.enterprise);
		for (const option of formData.contractOptions) {
			body.append('entry.1047964429', option);
		}
		body.append('entry.1056916052', formData.referenceImg);
		body.append('entry.1567459913', formData.requestedDuration);
		body.append('entry.1703649672', formData.phone);
		body.append('entry.1162429681', formData.other);
		try {
			await fetch(
				'https://docs.google.com/forms/d/e/1FAIpQLScr66UhBINhZ3JCzq3pKUJWWC7e2rqFwWQwg0SXnjkaWil9QA/formResponse',
				{
					method: 'POST',
					body,
					mode: 'no-cors',
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

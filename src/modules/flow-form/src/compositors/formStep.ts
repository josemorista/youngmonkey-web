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
		try {
			await fetch(
				'https://kc4d6khl8f.execute-api.us-east-1.amazonaws.com/v1/notify',
				{
					method: 'POST',
					body: JSON.stringify({
						clientName: formData.name,
						contactPhone: Number(formData.phone.replace(/\D/g, '')),
						enterprise: formData.enterprise,
						duration: formData.requestedDuration,
						reference: formData.referenceImg,
						briefing: formData.other,
						services: formData.contractOptions,
					}),
					headers: {
						'Content-Type': 'application/json',
						Authorization: '2b7a2839e8067292e9eed9c263ef67f7',
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

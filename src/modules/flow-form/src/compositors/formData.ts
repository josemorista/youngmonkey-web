import { reactive } from 'vue';

interface FormDataState {
	name: string;
	enterprise: string;
	contractOptions: Array<string>;
	requestedDuration: string;
	referenceImg: string;
	phone: string;
	other: string;
}

const formData = reactive<FormDataState>({
	name: '',
	enterprise: '',
	contractOptions: [],
	requestedDuration: '',
	referenceImg: '',
	phone: '',
	other: '',
});

export const useFormData = () => {
	return formData;
};

import { reactive } from 'vue';

interface FormDataState {
  name: string;
  enterprise: string;
  contractOptions: Array<string>;
  requestedDuration: string;
}

const formData = reactive<FormDataState>({
  name: '',
  enterprise: '',
  contractOptions: [],
  requestedDuration: '',
});

export const useFormData = () => {
  return formData;
};

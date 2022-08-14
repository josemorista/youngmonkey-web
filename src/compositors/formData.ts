import { reactive } from 'vue';

interface FormDataState {
  name: string;
  enterprise: string;
  contractOptions: Array<string>;
}

const formData = reactive<FormDataState>({
  name: '',
  enterprise: '',
  contractOptions: [],
});

export const useFormData = () => {
  return formData;
};

import { ref } from 'vue';

const isFlowFormOpen = ref(false);

const openFlowForm = () => {
	isFlowFormOpen.value = true;
};

const closeFlowForm = () => {
	isFlowFormOpen.value = false;
};

export const useFlowForm = () => ({
	openFlowForm,
	isFlowFormOpen,
	closeFlowForm,
});

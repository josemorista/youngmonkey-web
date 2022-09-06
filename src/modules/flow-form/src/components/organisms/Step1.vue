<template>
	<Step :step-number="1">
		<form @submit.prevent="onStepSubmit">
			<Input
				v-model="formData.name"
				type="text"
				label="Qual seu nome?*"
				placeholder="Digite aqui..."
			/>
			<Button :disabled="isFormDisabled" type="submit"> OK {{ '>' }} </Button>
		</form>
	</Step>
</template>

<script setup lang="ts">
import Input from '../atoms/Input.vue';
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { computed, defineEmits } from 'vue';
import { useFormData } from '../../compositors/formData';
const formData = useFormData();
const emitter = defineEmits<{
	(event: 'onStepSubmit'): void;
}>();
const isFormDisabled = computed(() => {
	return !formData.name;
});
const onStepSubmit = () => {
	if (!isFormDisabled.value) {
		emitter('onStepSubmit');
	}
};
</script>

<template>
	<Step :step-number="6">
		<form @submit.prevent="onStepSubmit">
			<Input
				v-model="formData.phone"
				type="phone"
				label="Digite seu telefone ou whtasapp para entrarmos em contato.*"
				placeholder="(11) 96123-4567"
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
const emitter = defineEmits<{
	(event: 'onStepSubmit'): void;
}>();
const formData = useFormData();
const isFormDisabled = computed(() => {
	return !formData.phone;
});
const onStepSubmit = () => {
	if (!isFormDisabled.value) {
		emitter('onStepSubmit');
	}
};
</script>

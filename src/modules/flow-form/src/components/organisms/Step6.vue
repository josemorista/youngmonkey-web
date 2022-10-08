<template>
	<Step :step-number="6">
		<form @submit.prevent="onStepSubmit">
			<Input
				v-model="formData.phone"
				type="phone"
				:label="label"
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
import { useI18n } from 'vue-i18n';
const emitter = defineEmits<{
	(event: 'onStepSubmit'): void;
}>();
const { t } = useI18n();
const label = computed(() => t('flow-form.contact_question'));
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

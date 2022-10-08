<template>
	<Step :step-number="3">
		<form @submit.prevent="$emit('onStepSubmit')">
			<MultipleInput
				:options="options"
				:selected="formData.contractOptions"
				:label="label"
				:legend="legend"
				@on-option-click="onOptionSelection($event)"
			/>
			<Button :disabled="isFormDisabled" type="submit"> OK {{ '>' }} </Button>
		</form>
	</Step>
</template>

<script setup lang="ts">
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { computed, defineEmits } from 'vue';
import MultipleInput from '../atoms/MultipleInput.vue';
import { useFormData } from '../../compositors/formData';
import { useI18n } from 'vue-i18n';
defineEmits<{
	(event: 'onStepSubmit'): void;
}>();
const { t } = useI18n();
const formData = useFormData();

const label = computed(() => t('flow-form.services_question'));
const legend = computed(() => t('flow-form.choose_services'));

const isFormDisabled = computed(() => {
	return !formData.contractOptions.length;
});

const options = computed(() => [
	{
		label: t('flow-form.services.animation_motion'),
		value: 'Animação / Motion',
	},
	{
		label: t('flow-form.services.video_edition'),
		value: 'Edição de Vídeo',
	},
	{
		label: t('flow-form.services.sound_design'),
		value: 'Sound Design',
	},
	{
		label: t('flow-form.services.screenplay'),
		value: 'Roteiro',
	},
	{
		label: t('flow-form.services.narration'),
		value: 'Narração / Locução',
	},
	{
		label: t('flow-form.services.ux'),
		value: 'UX e UI Design',
	},
]);

const onOptionSelection = (value: string) => {
	if (formData.contractOptions.some((el) => el === value)) {
		formData.contractOptions = formData.contractOptions.filter(
			(el) => el !== value
		);
	} else {
		formData.contractOptions.push(value);
	}
};
</script>

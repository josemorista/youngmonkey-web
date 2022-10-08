<template>
	<Step :step-number="3">
		<form @submit.prevent="$emit('onStepSubmit')">
			<AutoComplete
				:options="options"
				:selected="formData.requestedDuration"
				:label="label"
				@on-option-click="onOptionSelection($event)"
			/>
			<Button type="submit"> OK {{ '>' }} </Button>
		</form>
	</Step>
</template>

<script setup lang="ts">
import Step from '../molecules/Step.vue';
import Button from '../atoms/Button.vue';
import { computed, defineEmits } from 'vue';
import { useFormData } from '../../compositors/formData';
import AutoComplete from '../atoms/AutoComplete.vue';
import { useI18n } from 'vue-i18n';
defineEmits<{
	(event: 'onStepSubmit'): void;
}>();

const formData = useFormData();
const { t } = useI18n();
const label = computed(() => t('flow-form.duration_question'));
const options = computed(() => [
	{
		label: `0-1 ${t('flow-form.minute')}`,
		value: '0 - 1 minuto',
	},
	{
		label: `1-3 ${t('flow-form.minutes')}`,
		value: '1 - 3 minutos',
	},
	{
		label: `3-5 ${t('flow-form.minutes')}`,
		value: '3 - 5 minutos',
	},
	{
		label: `+ de 5 ${t('flow-form.minutes')}`,
		value: '+ de 5 minutos',
	},
]);

const onOptionSelection = (value: string) => {
	formData.requestedDuration = value;
};
</script>

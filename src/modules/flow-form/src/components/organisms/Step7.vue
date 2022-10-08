<template>
	<Step :step-number="7">
		<form @submit.prevent="$emit('onStepSubmit')">
			<Input
				v-model="formData.other"
				type="text"
				:label="label"
				:placeholder="placeholder"
			/>
			<Button type="submit"> {{ $t('flow-form.submit') }} {{ '>' }} </Button>
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
defineEmits<{
	(event: 'onStepSubmit'): void;
}>();
const { t } = useI18n();
const placeholder = computed(() =>
	t('flow-form.type_your_answer_here', { name: formData.name })
);
const label = computed(() => t('flow-form.other_info_question'));
const formData = useFormData();
</script>

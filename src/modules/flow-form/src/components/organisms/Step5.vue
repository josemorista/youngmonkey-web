<template>
	<Step :step-number="5">
		<form @submit.prevent="$emit('onStepSubmit')">
			<Input
				v-model="formData.referenceImg"
				type="text"
				:label="label"
				placeholder="https://"
			/>
			<Button type="submit"> OK {{ '>' }} </Button>
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
const formData = useFormData();
const { t } = useI18n();
const label = computed(() => t('flow-form.reference_img_question'));
</script>

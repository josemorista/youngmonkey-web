<template>
	<div class="form-container">
		<label class="custom-input-label" :for="uniqueId">{{ label }}</label>
		<input
			autocomplete="off"
			:id="uniqueId"
			:value="modelValue"
			@input="$emit('update:modelValue', ($event as any).target.value)"
			:type="type"
			:placeholder="placeholder"
			class="custom-input"
		/>
	</div>
</template>

<script setup lang="ts">
import { generateId } from '../../compositors/generators';
import { defineProps, defineEmits } from 'vue';
interface InputProps {
	label: string;
	type: string;
	placeholder: string;
	modelValue: string;
}

defineEmits<{
	(event: 'update:modelValue', value: string): void;
}>();

defineProps<InputProps>();

const uniqueId = `#input-${generateId()}`;
</script>

<style lang="scss" scoped>
div.form-container {
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 3rem;
	}
}
</style>

<template>
	<div class="form-container">
		<label class="custom-input-label" for="">{{ label }}</label>
		<legend>{{ legend }}</legend>
		<ul class="input-options">
			<li
				v-for="(option, index) of options"
				:key="option.value"
				:class="{
					['input-option']: true,
					selected: selectedClasses[option.value],
				}"
				@click="onOptionClick(option.value)"
			>
				<span class="input-label">
					{{ option.label }}
				</span>
				<span class="input-value">
					{{ alphabet.charAt(index) }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
interface MultipleInputProps {
	label: string;
	legend: string;
	selected: Array<string>;
	options: Array<{
		value: string;
		label: string;
	}>;
}

interface MultipleInputEmits {
	($event: 'onOptionClick', value: string): void;
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const props = defineProps<MultipleInputProps>();
const emit = defineEmits<MultipleInputEmits>();

const selectedClasses = computed(() => {
	const classes: Record<string, boolean> = {};
	for (const option of props.options) {
		classes[option.value] = props.selected.some((el) => el === option.value);
	}
	return classes;
});

const onOptionClick = (value: string) => {
	emit('onOptionClick', value);
};
</script>

<style lang="scss" scoped>
div.form-container {
	display: flex;
	flex-direction: column;

	legend {
		font-size: 1.3rem;
		color: var(--color-disabled);
		font-style: italic;
	}

	ul.input-options {
		margin-top: 3rem;

		li {
			display: flex;
			cursor: pointer;
			justify-content: space-between;
			align-items: center;
			padding: 1.6rem;
			font-size: 1.6rem;
			color: var(--color-primary);
			background-color: var(--color-primary-lighter);
			border: 1px solid var(--color-primary);
			border-radius: 10px;
			margin-bottom: 1rem;
			transition: background 0.25s;

			span.input-value {
				border-radius: 50%;
				padding: 0.6rem 1rem;
				border: 1px solid var(--color-primary);
				background-color: var(--color-primary-lighter);
			}

			&.selected {
				background-color: var(--color-primary-light);
			}
		}
	}
}

@media (min-width: 700px) {
	div.form-container {
		ul.input-options {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;

			li {
				flex-basis: 30%;
			}
		}
	}
}
</style>

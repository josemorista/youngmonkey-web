<template>
	<div class="dropdown-container">
		<slot name="pre"></slot>
		<span :class="`current-selected ${variant}`" @click="toggleIsOpen">{{ currentSelected?.option }}</span>
		<div class="dropdown-list" v-if="isOpen">
			<p class="label" v-if="label">{{ label }}</p>
			<ul>
				<li v-for="option of options" :key="option.value" @click="onOptionClick(option.value)">
					{{ option.option }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';

interface DropdownProps {
	options: Array<{ option: string; value: string }>;
	current: string;
	label?: string;
	variant: 'white';
}

interface DropdownEmits {
	(event: 'onValueSelection', value: string): void;
}

const emit = defineEmits<DropdownEmits>();
const props = defineProps<DropdownProps>();
const currentSelected = computed(() => props.options.find((el) => el.value === props.current));

const isOpen = ref(false);
const toggleIsOpen = () => {
	isOpen.value = !isOpen.value;
};

const onOptionClick = (value: string) => {
	emit('onValueSelection', value);
	toggleIsOpen();
};
</script>

<style lang="scss" scoped>
div.dropdown-container {
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 6px;
	position: relative;

	.current-selected {
		cursor: pointer;
		&.white {
			color: var(--color-white);
		}
	}

	.dropdown-list {
		width: 100%;
		position: absolute;
		background-color: var(--color-gray-400);
		bottom: 150%;
		padding: 4rem 2rem;
		min-width: fit-content;
		border-radius: 8px;

		.label {
			color: var(--color-gray-800);
			text-transform: uppercase;
			font-size: 1rem;
			font-weight: 700;
			margin-bottom: 2.4rem;
		}

		li {
			list-style: none;
			font-size: 1.2rem;
			margin-left: 1.4rem;
			cursor: pointer;
			& + li {
				margin-top: 2.4rem;
			}
		}
	}
}
</style>

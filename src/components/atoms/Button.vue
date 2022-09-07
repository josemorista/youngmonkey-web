<template>
	<button :class="`btn ${variant}`"><slot /></button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface ButtonProps {
	variant: 'primary' | 'secondary';
}
defineProps<ButtonProps>();
</script>

<style scoped lang="scss">
button.btn {
	padding: 1rem;
	border: none;
	border-radius: 8px;
	font-weight: 700;
	text-transform: uppercase;

	cursor: pointer;

	transition: filter 0.25s;

	&:hover {
		filter: opacity(0.9);
	}

	&.secondary {
		color: var(--color-primary);
		background-color: var(--color-secondary);
	}
}
</style>

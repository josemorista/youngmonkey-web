<template>
	<div :class="{ tab: true, active }" :style="tabStyle">
		<p class="title">{{ title }}</p>
		<p class="content">{{ content }}</p>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
interface TabProps {
	title: string;
	content: string;
	active: boolean;
	transitionTime: number;
}
const props = defineProps<TabProps>();
const tabStyle = computed(() => ({
	'--transition-time': `${props.transitionTime}s`,
}));
</script>

<style lang="scss" scoped>
div.tab {
	position: relative;
	border-left: 3px solid var(--color-gray-600);
	min-height: 7rem;
	padding: 0 1rem;
	cursor: pointer;

	p {
		&.title {
			color: var(--color-primary);
			font-weight: 700;
			margin-bottom: 0.8rem;
		}

		&.content {
			color: var(--colofalser-black-600);
		}
	}

	--transition-time: 3s;

	&::before {
		content: '';
		position: absolute;
		background-color: var(--color-primary);
		top: 0;
		left: -3px;
		width: 3px;
		height: 0;
	}

	&.active {
		&::before {
			height: 100%;
			transition: var(--transition-time);
		}
	}
}
</style>

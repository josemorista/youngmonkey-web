<template>
	<span :class="props.customClass">{{ text }}</span>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, defineProps } from 'vue';

interface TypeWriterTextProps {
	text: string;
	delay: number;
	initialDelay?: number;
	changeTime: number;
	customClass?: string;
}

const props = defineProps<TypeWriterTextProps>();
const currentIndex = ref(0);
const reverse = ref(false);
const text = computed(() => props.text.slice(0, currentIndex.value));
const sleep = (amount: number) => new Promise((resolve) => setTimeout(resolve, amount));

const toggleReverse = async () => {
	await sleep(props.delay);
	reverse.value = !reverse.value;
};

const updateCurrentText = async () => {
	let nextIndex = currentIndex.value + 1;
	if (reverse.value) {
		nextIndex = currentIndex.value - 1;
		if (nextIndex < 0) {
			nextIndex = 1;
			await toggleReverse();
		}
	} else if (nextIndex > props.text.length) {
		nextIndex = props.text.length - 1;
		await toggleReverse();
	}
	currentIndex.value = nextIndex;
	setTimeout(updateCurrentText, props.changeTime);
};

onMounted(() => {
	setTimeout(updateCurrentText, props.initialDelay || props.delay);
});
</script>

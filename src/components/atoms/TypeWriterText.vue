<template>
	<span :class="props.customClass">{{ text }}</span>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, defineProps, defineExpose } from 'vue';

interface TypeWriterTextProps {
	text: string;
	reverseDelay: number;
	startDelay: number;
	changeTime: number;
	customClass?: string;
	iterationCount?: number;
}

const props = defineProps<TypeWriterTextProps>();
const currentIndex = ref(0);
const reverse = ref(false);
const text = computed(() => props.text.slice(0, currentIndex.value));
const sleep = (amount: number) => new Promise((resolve) => setTimeout(resolve, amount));
let timeout: number;

const toggleReverse = async (waitTime: number) => {
	await sleep(waitTime);
	reverse.value = !reverse.value;
};

const reset = () => {
	timeout && clearTimeout(timeout);
	currentIndex.value = 0;
	reverse.value = false;
	timeout = setTimeout(updateCurrentText, props.startDelay);
};

const updateCurrentText = async () => {
	let nextIndex = currentIndex.value + 1;
	if (reverse.value) {
		nextIndex = currentIndex.value - 1;
		if (nextIndex < 0) {
			nextIndex = 1;
			return;
		}
	} else if (nextIndex > props.text.length) {
		nextIndex = props.text.length - 1;
		await toggleReverse(props.reverseDelay);
	}
	currentIndex.value = nextIndex;
	timeout = setTimeout(updateCurrentText, props.changeTime);
};

onMounted(() => {
	timeout = setTimeout(updateCurrentText, props.startDelay);
});

defineExpose<{ reset: () => void }>({
	reset,
});
</script>

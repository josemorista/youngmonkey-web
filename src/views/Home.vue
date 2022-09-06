<template>
	<div :class="{ 'flow-form': true, hidden: !isFlowFormOpen }">
		<span class="close-button" @click="toggleFlowForm">X</span>
		<YmFlowForm />
	</div>
	<div v-if="!isFlowFormOpen" @click="toggleFlowForm">Abrir</div>
</template>

<script setup lang="ts">
import YmFlowForm from 'flow-form/src/Module.vue';
import { ref } from 'vue';
const isFlowFormOpen = ref(true);
const toggleFlowForm = () => {
	isFlowFormOpen.value = !isFlowFormOpen.value;
};
</script>

<style lang="scss" scoped>
.flow-form {
	position: relative;
	span.close-button {
		position: absolute;
		cursor: pointer;
		top: 2rem;
		left: 1rem;
		z-index: 100;
	}
}

.hidden {
	display: none;
}
</style>

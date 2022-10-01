<template>
	<div :class="{ 'flow-form-container': true, hidden: !isFlowFormOpen }">
		<div class="close-icon" @click="closeFlowForm">X</div>
		<FlowForm />
	</div>
</template>

<script setup lang="ts">
import FlowForm from '../../modules/flow-form/src/Module.vue';
import { toRef, watchEffect } from 'vue';
import { useFlowForm } from '../../compositors/useFlowForm';

const flowFormStore = useFlowForm();
const { closeFlowForm } = flowFormStore;
const isFlowFormOpen = toRef(flowFormStore, 'isFlowFormOpen');

watchEffect(() => {
	if (isFlowFormOpen.value) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'auto';
	}
});
</script>

<style lang="scss" scoped>
div.flow-form-container {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100vw;
	height: 100%;

	div.close-icon {
		position: fixed;
		top: 2rem;
		left: 1rem;
		cursor: pointer;
		font-size: 2.4rem;
	}

	&.hidden {
		display: none;
	}
}
</style>

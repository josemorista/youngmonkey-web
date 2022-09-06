<template>
	<main class="flow-form">
		<header>
			<ProgressBar :width="completedPercentage" />
		</header>
		<FlowForm v-if="completedPercentage !== 100" />
		<Success v-if="completedPercentage === 100" />
	</main>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import ProgressBar from './components/atoms/ProgressBar.vue';
import { useFormStep } from './compositors/formStep';
import FlowForm from './components/templates/FlowForm.vue';
import Success from './components/templates/Success.vue';
const formStepStore = useFormStep();
const completedPercentage = toRef(formStepStore, 'completedPercentage');
</script>

<style lang="scss">
.flow-form {
	// Global styles
	h1 {
		font-size: 4rem;
		color: var(--color-primary);
	}

	label {
		&.custom-input-label {
			font-weight: 500;
			font-size: 2rem;
		}
	}

	input {
		&.custom-input {
			height: 3rem;
			width: 100%;
			border: 0;
			border-bottom: 2px solid var(--color-primary);

			&::placeholder {
				font-size: 15px;
				color: var(--color-primary-light);
			}
		}
	}

	@media (min-width: 700px) {
		label {
			&.custom-input-label {
				font-size: 3.2rem;
			}
		}

		input {
			&.custom-input {
				height: 5rem;
				font-size: 2.8rem;
				&::placeholder {
					font-size: 2.8rem;
				}
			}
		}
	}
}
</style>

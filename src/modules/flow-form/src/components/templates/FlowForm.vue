<template>
	<main class="flow-form">
		<img class="logo" src="../../assets/logo.svg" alt="logo-young-monkey" />
		<section class="form">
			<Step1 v-if="currentStep === 1" @on-step-submit="onStepSubmit(1)" />
			<Step2 v-if="currentStep === 2" @on-step-submit="onStepSubmit(2)" />
			<Step3 v-if="currentStep === 3" @on-step-submit="onStepSubmit(3)" />
			<Step4 v-if="currentStep === 4" @on-step-submit="onStepSubmit(4)" />
			<Step5 v-if="currentStep === 5" @on-step-submit="onStepSubmit(5)" />
			<Step6 v-if="currentStep === 6" @on-step-submit="onStepSubmit(6)" />
			<Step7 v-if="currentStep === 7" @on-step-submit="onStepSubmit(7)" />
		</section>
		<Footer />
	</main>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import Footer from '../../components/molecules/Footer.vue';
import Step1 from '../../components/organisms/Step1.vue';
import Step2 from '../../components/organisms/Step2.vue';
import Step3 from '../../components/organisms/Step3.vue';
import Step4 from '../../components/organisms/Step4.vue';
import Step5 from '../../components/organisms/Step5.vue';
import Step6 from '../../components/organisms/Step6.vue';
import Step7 from '../../components/organisms/Step7.vue';
import { useFormStep } from '../../compositors/formStep';

const formStepStore = useFormStep();
const { onStepSubmit } = formStepStore;
const currentStep = toRef(formStepStore, 'currentStep');
</script>

<style lang="scss" scoped>
main.flow-form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: calc(100vh - 0.8rem);
	overflow-y: auto;
	padding: 0 3rem;

	img.logo {
		width: 9rem;
		height: 9rem;
		margin-top: 3rem;
	}

	.form {
		width: 100%;
	}

	footer {
		margin-bottom: 3rem;
	}
}

@media (min-width: 700px) {
	main.flow-form {
		flex-direction: row;

		img.logo {
			margin-top: 0;
			margin-left: 8rem;
			width: 11rem;
			height: 11rem;
		}

		.form {
			flex: 1;
			max-width: 82rem;
			justify-self: center;
		}

		footer {
			flex: 0;
			align-self: flex-end;
		}
	}
}
</style>

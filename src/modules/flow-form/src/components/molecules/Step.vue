<template>
	<div class="step-container">
		<div class="step-number">
			<p>{{ stepNumber }}</p>
			<img src="../../assets/arrow.svg" alt="arrow" />
		</div>
		<div class="step-content">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface StepProps {
	stepNumber: number;
}
defineProps<StepProps>();
</script>

<style lang="scss">
@keyframes load-step {
	0% {
		opacity: 0;
		transform: translate3d(0, 100%, 0);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
.step-container {
	display: flex;
	align-items: flex-start;
	width: 100%;

	animation-name: load-step;
	animation-duration: 0.5s;

	.step-number {
		display: flex;
		align-items: center;
		margin-right: 1rem;

		p {
			font-size: 2rem;
			margin-right: 0.6rem;
		}

		img {
			width: 0.8rem;
			height: 0.8rem;
		}
	}

	.step-content {
		width: 100%;
		button {
			&[type='submit'] {
				margin-top: 1.2rem;
			}
		}
	}
}

@media (min-width: 700px) {
	.step-container {
		.step-number {
			padding-top: 0.6rem;
			p {
				font-size: 2.6rem;
			}
		}
	}
}
</style>

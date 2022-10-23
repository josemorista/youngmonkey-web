<template>
	<section id="mult-platform" class="mult-platform">
		<h2>{{ $t('mult_platform.title') }}</h2>
		<p>
			{{ $t('mult_platform.content1') }}
		</p>
		<p>
			<strong>
				{{ $t('mult_platform.content2_part1') }}
			</strong>
			{{ $t('mult_platform.content2_part2') }}
		</p>
		<div class="img">
			<lottie-animation
				:loop="true"
				:animation-data="currentAnimation === 'desktop' ? desktopAnimation : mobileAnimation"
			></lottie-animation>
		</div>
	</section>
</template>

<script setup lang="ts">
import { LottieAnimation } from 'lottie-web-vue';
import { onMounted, onUnmounted, ref } from 'vue';
import desktopAnimation from '../../assets/lottie/mult-plataform.json';
import mobileAnimation from '../../assets/lottie/mult-plataform.json';

const currentAnimation = ref<'mobile' | 'desktop'>('desktop');

const resizeObserver = () => {
	if (window.innerWidth < 1024) {
		currentAnimation.value = 'mobile';
	} else {
		currentAnimation.value = 'desktop';
	}
};

onMounted(() => {
	document.addEventListener('resize', resizeObserver);
});

onUnmounted(() => {
	document.removeEventListener('resize', resizeObserver);
});
</script>

<style lang="scss" scoped>
section.mult-platform {
	background-color: var(--color-primary);
	padding: 4rem 3.6rem;
	border-radius: 16px;
	margin-top: 8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		font-size: 4.8rem;
		color: var(--color-secondary);
		font-family: 'Bebas Neue';
		margin-bottom: 3.2rem;
		max-width: 68rem;
		text-align: center;
	}

	p {
		color: var(--color-white);
		max-width: 80rem;
		text-align: center;
		& + p {
			margin-top: 2rem;
		}
	}

	.img {
		width: 100%;
		max-width: 60rem;
		margin-top: 3.2rem;
	}
}

@media (min-width: 1200px) {
	section.mult-platform {
		h2 {
			font-size: 7rem;
		}

		.img {
			margin-top: 5rem;
		}
	}
}
</style>

<template>
	<section id="hero" class="hero">
		<div class="lotier-player">
			<LottieAnimation :loop="true" :autoPlay="true" :animationData="require('../../assets/lottie/hero-rocket.json')" />
		</div>
		<div class="hero-texts">
			<h1 ref="text1Ref">
				{{ $t('hero.videos') }}
				<span class="typewriter forwards" ref="typewriter1"> {{ $t('hero.creatives') }}</span>
			</h1>
			<h1>
				{{ $t('hero.for_your') }}
				<span class="typewriter forwards" ref="typewriter2"> {{ $t('hero.ideas') }}</span>
			</h1>
			<p class="do-different">
				{{ $t('hero.do_different') }}
			</p>
			<p class="description">
				{{ $t('hero.description') }}
			</p>
			<Button variant="secondary">{{ $t('hero.speak_to_a_specialist') }}</Button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { LottieAnimation } from 'lottie-web-vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Button from '../atoms/Button.vue';
const typewriter1 = ref<HTMLSpanElement>();
const typewriter2 = ref<HTMLSpanElement>();

const toggleAnimation = (el: HTMLSpanElement) => {
	if (el.classList.contains('backwards')) {
		el.classList.replace('backwards', 'forwards');
		return;
	}
	el.classList.replace('forwards', 'backwards');
};

let intervalHandler: number;
onMounted(() => {
	intervalHandler = setInterval(() => {
		if (typewriter1.value && typewriter2.value) {
			toggleAnimation(typewriter1.value);
			toggleAnimation(typewriter2.value);
		}
	}, 2500);
});

onUnmounted(() => {
	if (intervalHandler) clearInterval(intervalHandler);
});
</script>

<style lang="scss" scoped>
.typewriter {
	overflow: hidden;
	white-space: nowrap;
	border-right: 3px solid var(--color-secondary);
	&.forwards {
		animation: typing-forward 2.5s steps(30, end), blink-caret 0.75s step-end infinite;
	}
	&.backwards {
		animation: typing-backwards 2.5s steps(30, end), blink-caret 0.75s step-end infinite;
	}
}

@keyframes typing-forward {
	0% {
		width: 0;
	}
	100% {
		width: 100%;
	}
}

@keyframes typing-backwards {
	0% {
		width: 100%;
	}
	100% {
		width: 0;
	}
}

@keyframes blink-caret {
	0% {
		border-color: transparent;
	}
	50% {
		border-color: var(--color-secondary);
	}
	100% {
		border-color: transparent;
	}
}

.hero {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 14rem;

	.lotier-player {
		width: calc(100% - 2rem);
		max-width: 60rem;
		height: auto;
	}

	button {
		width: 100%;
		max-width: 40rem;
		margin-top: 3rem;
		font-size: 2rem;
	}
}
.hero-texts {
	max-width: 50rem;
	h1 {
		text-transform: uppercase;
		color: var(--color-primary);
		font-size: 6.4rem;
		font-family: 'Bebas Neue';
		span {
			padding-right: 1px;
			display: inline-flex;
			font-family: inherit;
			font-size: inherit;
			max-width: fit-content;
			color: var(--color-secondary);
		}
	}

	p {
		&.do-different {
			font-size: 2.4rem;
			font-weight: 500;
			color: var(--color-black-600);
			margin-bottom: 2rem;
			margin-top: 2.4rem;
		}
	}
}

@media (min-width: 1024px) {
	.hero {
		margin-top: 20rem;
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	.hero-texts {
		h1 {
			font-size: 8.4rem;
		}
	}
}
</style>

<template>
	<section id="hero" class="hero">
		<div class="lotier-player">
			<dotlottie-player autoplay loop :src="heroAnimation"> </dotlottie-player>
		</div>
		<div class="hero-texts">
			<h1 ref="text1Ref">
				<span class="typewriter forwards" ref="typewriter1"> {{ text1Options[currentText1] }}</span>
			</h1>
			<h1>
				<span class="typewriter forwards secondary" ref="typewriter2"> {{ text2Options[currentText2] }}</span>
			</h1>
			<p class="do-different">
				{{ $t('hero.do_different') }}
			</p>
			<p class="description">
				{{ $t('hero.description') }}
			</p>
			<Button variant="secondary" @click="openFlowForm">{{ $t('hero.speak_to_a_specialist') }}</Button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useFlowForm } from '../../compositors/useFlowForm';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Button from '../atoms/Button.vue';
import { useI18n } from 'vue-i18n';
import heroAnimation from '../../assets/lottie/hero-rocket.json';
const typewriter1 = ref<HTMLSpanElement>();
const typewriter2 = ref<HTMLSpanElement>();
const { openFlowForm } = useFlowForm();
const { t } = useI18n();

const text1Options = computed(() => [t('hero.stories'), t('hero.videos')]);
const text2Options = computed(() => [t('hero.incredible'), t('hero.creatives')]);

const currentText1 = ref(0);
const currentText2 = ref(0);

const getNextText = (current: number, options: Array<string>) => {
	const next = current + 1;
	if (next >= options.length) return 0;
	return next;
};
const toggleAnimation = (el: HTMLSpanElement) => {
	if (el.classList.contains('backwards')) {
		el.classList.replace('backwards', 'forwards');
		return;
	}
	el.classList.replace('forwards', 'backwards');
};
let animationIntervalHandler: number;
let textsIntervalHandler: number;
onMounted(() => {
	animationIntervalHandler = setInterval(() => {
		if (typewriter1.value && typewriter2.value) {
			toggleAnimation(typewriter1.value);
			toggleAnimation(typewriter2.value);
		}
	}, 2500);
	textsIntervalHandler = setInterval(() => {
		if (typewriter1.value && typewriter2.value) {
			currentText1.value = getNextText(currentText1.value, text1Options.value);
			currentText2.value = getNextText(currentText2.value, text2Options.value);
			if (typewriter2.value.classList.contains('secondary')) {
				typewriter2.value.classList.remove('secondary');
				typewriter1.value.classList.add('secondary');
			} else {
				typewriter2.value.classList.add('secondary');
				typewriter1.value.classList.remove('secondary');
			}
		}
	}, 5000);
});
onUnmounted(() => {
	if (animationIntervalHandler) clearInterval(animationIntervalHandler);
	if (textsIntervalHandler) clearInterval(textsIntervalHandler);
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
	max-width: 56rem;
	h1 {
		text-transform: uppercase;
		font-size: 6.4rem;
		font-family: 'Bebas Neue';

		span {
			padding-right: 1px;
			display: inline-flex;
			font-family: inherit;
			font-size: inherit;
			max-width: fit-content;
			color: var(--color-primary);
			&.secondary {
				color: var(--color-secondary);
			}
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
@media (min-width: 1200px) {
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
Footer

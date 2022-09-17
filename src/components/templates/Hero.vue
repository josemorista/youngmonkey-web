<template>
	<section id="hero" class="hero">
		<img src="../../assets/img/hero.svg" alt="hero" />
		<div class="hero-texts">
			<h1 class="typewriter" ref="text1Ref">
				{{ $tc('global.video', 2) }} <span> {{ $tc('global.creative', 2) }}</span>
			</h1>
			<h1 class="typewriter">
				{{ $t('hero.for_your') }} <span> {{ $tc('global.idea', 2) }}</span>
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
import { onMounted, ref } from 'vue';
import Button from '../atoms/Button.vue';
const text1Ref = ref<HTMLParagraphElement>();
onMounted(() => {
	setTimeout(() => {
		if (text1Ref.value) {
			text1Ref.value.style.border = 'none';
		}
	}, 3500);
});
</script>
const
<style lang="scss" scoped>
.typewriter {
	overflow: hidden;
	white-space: nowrap;
	border-right: 3px solid var(--color-secondary);
	animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;

	&:nth-of-type(2) {
		animation-fill-mode: backwards;
		animation-delay: 3.6s;
	}
}

@keyframes typing {
	0% {
		width: 0;
	}
	100% {
		width: 100%;
		border-color: transparent;
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
	margin-top: 4rem;

	img {
		width: calc(100% - 2rem);
		max-width: 60rem;
		height: auto;
		object-fit: contain;
	}

	button {
		display: none;
	}
}
.hero-texts {
	max-width: 48.8rem;
	h1 {
		line-height: 1;
		max-width: 35rem;
		text-transform: uppercase;
		color: var(--color-primary);
		font-size: 6.4rem;
		font-family: 'Bebas Neue';
		span {
			font-family: inherit;
			font-size: inherit;
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

@media (min-width: 768px) {
	.hero {
		margin-top: 10rem;
		flex-direction: row-reverse;
		justify-content: space-evenly;

		button {
			display: block;
			margin-top: 3rem;
			padding: 1rem 4rem;
			font-size: 2rem;
		}
	}

	.hero-texts {
		h1 {
			font-size: 9rem;
			max-width: 100%;
		}
	}
}
</style>

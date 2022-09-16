<template>
	<section id="hero" class="hero">
		<img src="../../assets/img/hero.svg" alt="hero" />
		<div class="hero-texts">
			<h1>
				<TypeWriterText :text="$tc('global.video', 2)" :delay="20000" :change-time="500" />
				<TypeWriterText custom-class="highlight" :text="$tc('global.creative', 2)" :delay="5000" :change-time="300" />
				<TypeWriterText :text="$t('hero.for_your')" :delay="10000" :change-time="300" />
				<TypeWriterText custom-class="highlight" :text="$tc('global.idea', 2)" :delay="15000" :change-time="300" />
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
import Button from '../atoms/Button.vue';
import TypeWriterText from '../atoms/TypeWriterText.vue';
</script>
const
<style lang="scss" scoped>
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
	max-width: 50rem;
	h1 {
		text-transform: uppercase;
		color: var(--color-primary);
		font-size: 6.4rem;
		font-family: 'Bebas Neue';
		span {
			font-family: 'Bebas Neue';
			font-size: inherit;
			&.highlight {
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
			margin-bottom: 3.2rem;
		}
	}
}
</style>

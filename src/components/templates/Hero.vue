<template>
	<section id="hero" class="hero">
		<img src="../../assets/img/hero.svg" alt="hero" />
		<div class="hero-texts">
			<h1>
				<TypeWriterText
					ref="t1Ref"
					:text="texts[0]"
					:reverse-delay="t1RevDelay"
					:start-delay="0"
					:change-time="changeTime"
				/>

				<TypeWriterText
					ref="t2Ref"
					custom-class="highlight"
					:reverse-delay="t2RevDelay"
					:text="texts[1]"
					:start-delay="t2initDelay"
					:change-time="changeTime"
				/>

				<TypeWriterText
					ref="t3Ref"
					:reverse-delay="t3RevDelay"
					:text="texts[2]"
					:start-delay="t3initDelay"
					:change-time="changeTime"
				/>

				<TypeWriterText
					ref="t4Ref"
					:reverse-delay="0"
					custom-class="highlight"
					:text="texts[3]"
					:start-delay="t4initDelay"
					:change-time="changeTime"
				/>
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
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from '../atoms/Button.vue';
import TypeWriterText from '../atoms/TypeWriterText.vue';
const { t } = useI18n();
const changeTime = 220;
const texts = computed(() => [t('global.video', 2), t('global.creative', 2), t('hero.for_your'), t('global.idea', 2)]);

const t2initDelay = computed(() => texts.value[0].length * changeTime);
const t3initDelay = computed(() => texts.value[1].length * changeTime + t2initDelay.value);
const t4initDelay = computed(() => texts.value[2].length * changeTime + t3initDelay.value);

const textsSize = computed(() => texts.value.reduce((acum, el) => acum + el.length, 0));
const t1RevDelay = computed(() => (textsSize.value - texts.value[0].length) * 2 * changeTime);
const t2RevDelay = computed(() => (texts.value[2].length + texts.value[3].length) * 2 * changeTime);
const t3RevDelay = computed(() => texts.value[3].length * 2 * changeTime);

const t1Ref = ref();
const t2Ref = ref();
const t3Ref = ref();
const t4Ref = ref();

onMounted(() => {
	setInterval(() => {
		t1Ref.value?.reset();
		t2Ref.value?.reset();
		t3Ref.value?.reset();
		t4Ref.value?.reset();
	}, textsSize.value * changeTime * 2);
});
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
			margin-right: 1rem;
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

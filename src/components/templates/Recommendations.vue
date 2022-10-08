<template>
	<section class="recommendations">
		<RecommendationCarousel :recommendations="recommendations" :change-interval="5000" />
	</section>
</template>

<script setup lang="ts">
import { Enterprise } from '../../entities/Enterprise';
import { Recommendation } from '../../entities/Recommendation';
import { RecommendationAuthor } from '../../entities/RecommendationAuthor';
import RecommendationCarousel from '../organisms/RecommendationCarousel.vue';
const recommendations = [
	new Recommendation(
		'Working with YoungMonkey was great. They created a very professional video in a short time frame with very little guidance from me. Updates and improvements were very quickly integrated. I would definitely work with YongMonkey again.',
		new RecommendationAuthor(
			'Brian Arnott',
			'brian.png',
			'Director, Dolby Australia',
			new Enterprise('Dolby', 'dolby.png')
		)
	),
	new Recommendation(
		'Working with YoungMonkey was great. They created a very professional video in a short time frame with very little guidance from me. Updates and improvements were very quickly integrated. I would definitely work with YongMonkey again.',
		new RecommendationAuthor(
			'Diego Silva',
			'brian.png',
			'Director, Dolby Australia',
			new Enterprise('Dolby', 'dolby.png')
		)
	),
	new Recommendation(
		'Working with YoungMonkey was great. They created a very professional video in a short time frame with very little guidance from me. Updates and improvements were very quickly integrated. I would definitely work with YongMonkey again.',
		new RecommendationAuthor(
			'Brian Arnott',
			'brian.png',
			'Director, Dolby Australia',
			new Enterprise('Dolby', 'dolby.png')
		)
	),
];
</script>

<style lang="scss" scoped>
section.recommendations {
	margin-top: 14rem;
}

@media (min-width: 1024px) {
	section.recommendations {
		margin-top: 24rem;
	}
}
</style>

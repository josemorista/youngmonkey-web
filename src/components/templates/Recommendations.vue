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
		'Working with YoungMonkey was great. They created a very professional video in a short time frame with very little guidance from me. Updates and improvements were very quickly integrated. I would definitely work with Young Monkey again.',
		new RecommendationAuthor(
			'Brian Arnott',
			'brian.png',
			'Director, Dolby Australia',
			new Enterprise('Dolby', 'dolby.png')
		)
	),
	new Recommendation(
		'He went above and beyond to make this project work! My client had loads of reversions but Diego was a very good communicator, result driven and literally saved this project. One of the best suppliers ever encountered. On top of being super patient; and delivering ahead of time every single time.',
		new RecommendationAuthor(
			'Gregor Amon',
			'gregor.png',
			'Communication Director and Head of Production',
			new Enterprise('Shadani Consulting', 'shadani.png')
		)
	),
	/*new Recommendation(
		'Working with YoungMonkey was great. They created a very professional video in a short time frame with very little guidance from me. Updates and improvements were very quickly integrated. I would definitely work with YongMonkey again.',
		new RecommendationAuthor(
			'Brian Arnott',
			'brian.png',
			'Director, Dolby Australia',
			new Enterprise('Dolby', 'dolby.png')
		)
	),*/
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

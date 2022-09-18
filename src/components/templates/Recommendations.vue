<template>
	<section class="recommendations">
		<ul>
			<li>
				<RecommendationCard />
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import RecommendationCard from '../molecules/RecommendationCard.vue';
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

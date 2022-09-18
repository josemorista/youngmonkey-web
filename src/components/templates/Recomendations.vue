<template>
	<section class="recomendations">
		<ul>
			<li>
				<RecomendationCard />
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import RecomendationCard from '../molecules/RecomendationCard.vue';
</script>

<style lang="scss" scoped>
section.recomendations {
	margin-top: 14rem;
}

@media (min-width: 1024px) {
	section.recomendations {
		margin-top: 24rem;
	}
}
</style>

<template>
	<div class="recommendations-carousel">
		<ul ref="carrouselRef">
			<li v-for="recommendation of recommendations" :key="recommendation.id" ref="recommendationsRef">
				<RecommendationCard :recommendation="recommendation" />
			</li>
		</ul>
		<div class="carousel-indicator">
			<span
				v-for="(recommendation, index) in recommendations"
				:class="{ 'dot-indicator': true, current: index === currentIndex }"
				:key="`dot-${recommendation.id}`"
				@click="handleChangeCurrent(index)"
			></span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Recommendation } from 'src/entities/Recommendation';
import { defineProps, onMounted, onUnmounted, ref } from 'vue';
import RecommendationCard from '../molecules/RecommendationCard.vue';
interface RecommendationCarouselProps {
	recommendations: Array<Recommendation>;
	changeInterval: number;
}
const props = defineProps<RecommendationCarouselProps>();

const carrouselRef = ref<HTMLUListElement>();
const recommendationsRef = ref<HTMLLIElement[]>();
let timeoutHandler: number;
const currentIndex = ref(0);

const handleChangeCurrent = (index: number) => {
	clearCurrentTimeout();
	let oldIndex = currentIndex.value;
	if (props.recommendations[index]) {
		currentIndex.value = index;
	} else {
		currentIndex.value = 0;
	}
	if (oldIndex !== currentIndex.value && carrouselRef.value && recommendationsRef.value) {
		carrouselRef.value.scroll({
			behavior: 'smooth',
			left: recommendationsRef.value[currentIndex.value].getBoundingClientRect().width * currentIndex.value,
		});
	}
	timeoutHandler = setTimeout(() => {
		handleChangeCurrent(currentIndex.value + 1);
	}, props.changeInterval);
};

const clearCurrentTimeout = () => {
	if (timeoutHandler) clearTimeout(timeoutHandler);
};

onMounted(() => {
	handleChangeCurrent(0);
});

onUnmounted(() => {
	clearCurrentTimeout();
});
</script>

<style lang="scss">
div.recommendations-carousel {
	ul {
		display: flex;
		overflow-x: hidden;
		list-style: none;

		li {
			padding: 1rem;
			display: block;
			min-width: 100%;
		}
	}

	div.carousel-indicator {
		display: flex;
		justify-content: center;
		gap: 4px;
		margin-top: 2rem;

		span.dot-indicator {
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: var(--color-gray-400);
			cursor: pointer;

			&.current {
				background-color: var(--color-gray-800);
			}
		}
	}
}
</style>

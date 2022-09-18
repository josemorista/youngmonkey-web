<template>
	<Navbar />
	<main class="container">
		<div class="content">
			<Hero />
			<MethodAndOriginality />
			<MultiPlatform />
			<Recommendations />
		</div>
	</main>
</template>

<script setup lang="ts">
import Navbar from '../components/molecules/Navbar.vue';
import Hero from '../components/templates/Hero.vue';
import MethodAndOriginality from '../components/templates/MethodAndOriginality.vue';
import MultiPlatform from '../components/templates/MultiPlatform.vue';
import Recommendations from '../components/templates/Recommendations.vue';
</script>

<style lang="scss" scoped>
.flow-form {
	position: relative;
	span.close-button {
		position: absolute;
		cursor: pointer;
		top: 2rem;
		left: 1rem;
		z-index: 100;
	}
}

.hidden {
	display: none;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	.content {
		width: calc(100% - 4rem);
		max-width: 1360px;
		margin-bottom: 10rem;
	}
}
</style>

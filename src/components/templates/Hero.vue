<template>
	<section id="hero" class="hero">
		<img src="" alt="" />
		<div class="hero-texts">
			<MorphText :texts="words" :morph-time="2" :cooldown-time="0.25">
				<template v-slot:pre>
					<span>Vídeos</span>
				</template>
			</MorphText>
		</div>
	</section>
</template>

<script setup lang="ts">
import MorphText from '../atoms/MorphText.vue';
const words = ['Criativos', 'Geniais'];
</script>

<style lang="scss">
.hero-texts {
	span,
	p {
		font-size: 4rem;
	}
}
</style>

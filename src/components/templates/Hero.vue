<template>
	<section id="hero" class="hero">
		<img src="" alt="" />
		<div class="hero-texts">
			<MorphText :texts="words" :morph-time="1" :cooldown-time="0.25" />
		</div>
	</section>
</template>

<script setup lang="ts">
import MorphText from '../atoms/MorphText.vue';
const words = ['Criativo', 'Genial'];
</script>

<style lang="scss"></style>

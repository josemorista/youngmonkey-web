<template>
	<Navbar />
</template>

<script setup lang="ts">
import Navbar from '../components/molecules/Navbar.vue';
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
</style>

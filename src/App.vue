<template>
	<Home />
</template>

<script setup lang="ts">
import Home from './views/Home.vue';
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: none;
	box-shadow: none;
	font-size: 62.5%;
	font-family: Montserrat;
}

p,
span,
button,
input,
a,
div,
label,
section,
header,
footer {
	font-size: 1.6rem;
}

:root {
	--color-white: #ffffff;
	--color-primary: #25044a;
	--color-primary-light: #25044a80;
	--color-primary-lighter: #25044a1a;

	--color-gray-400: #d9d9d9;
	--color-gray-600: rgba(37, 4, 74, 0.5);
	--color-black-600: #1e1e1e;

	--color-secondary: #ffdc00;
	--color-disabled: #8c8c8c;
}
</style>

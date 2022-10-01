<template>
	<Home />
	<FlowFormContainer />
</template>

<script setup lang="ts">
import Home from './views/Home.vue';
import FlowFormContainer from './components/templates/FlowFormContainer.vue';
</script>

<style lang="scss">
html {
	scroll-padding-top: 10rem; // height of sticky header
	scroll-behavior: smooth;
}

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
cite,
input,
a,
div,
label,
section,
header,
footer {
	font-size: 1.6rem;
}

strong {
	font-size: inherit;
}

:root {
	--color-white: #ffffff;
	--color-primary: #25044a;
	--color-primary-light: #25044a80;
	--color-primary-lighter: #25044a1a;

	--color-gray-400: #d9d9d9;
	--color-gray-600: rgba(37, 4, 74, 0.5);
	--color-gray-800: #5b5b5b;
	--color-black-600: #1e1e1e;

	--color-secondary: #ffdc00;
	--color-disabled: #8c8c8c;
}
</style>

<template>
	<section class="method-and-originality">
		<h1>{{ $t('method_and_originality.method_plus_originality') }}</h1>
		<p>{{ $t('method_and_originality.content') }}</p>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
section.method-and-originality {
	margin-top: 8rem;
	> h1 {
		font-family: 'Bebas Neue';
		font-size: 6.4rem;
		color: var(--color-primary);
	}
}
</style>

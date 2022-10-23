<template>
	<section id="method-and-originality" class="method-and-originality">
		<h1>{{ $t('method_and_originality.method_plus_originality') }}</h1>
		<p>{{ $t('method_and_originality.content') }}</p>
		<div class="auto-tab">
			<AutoTabSwitcher />
		</div>
	</section>
</template>

<script setup lang="ts">
import AutoTabSwitcher from '../organisms/AutoTabSwitcher.vue';
</script>

<style lang="scss" scoped>
section.method-and-originality {
	margin-top: 8rem;
	> h1 {
		font-family: 'Bebas Neue';
		font-size: 6.4rem;
		color: var(--color-primary);
	}

	.auto-tab {
		margin-top: 5rem;
	}
}

@media (min-width: 1200px) {
	section.method-and-originality {
		> h1 {
			font-size: 8.4rem;
		}

		.auto-tab {
			margin-top: 8rem;
		}
	}
}
</style>

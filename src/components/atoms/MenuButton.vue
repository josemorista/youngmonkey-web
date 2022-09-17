<template>
	<div class="menu-button">
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</div>
</template>

<style scoped lang="scss">
.menu-button {
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	width: 4rem;
	.bar {
		display: block;
		height: 6px;
		width: 100%;
		background-color: var(--color-gray-400);
		border-radius: 8px;
	}
}
</style>

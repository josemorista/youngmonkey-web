<template>
	<nav class="header-navbar">
		<div class="logo-and-menu">
			<img src="../../assets/img/logo.png" alt="logo young monkey" />
			<div class="menu-button">
				<MenuButton @click="toggleMenuOpen" />
			</div>
		</div>
		<div :class="{ 'nav-links': true, hidden: !isMenuOpen }">
			<ul>
				<li v-for="navlink of navLinks" v-once :key="navlink.to">
					<a :href="navlink.to" class="nav-link-anchor">{{ $t(`navbar.${navlink.text}`) }}</a>
				</li>
			</ul>
			<Button variant="secondary"> {{ $t('global.contact') }} </Button>
		</div>
		<div class="social-links">
			<a
				class="social-link-anchor"
				v-for="socialLink of socialLinks"
				:key="socialLink.icon"
				:href="socialLink.to"
				v-once
			>
				<img :src="require(`../../assets/icons/${socialLink.icon}.svg`)" :alt="socialLink.icon" />
			</a>
		</div>
	</nav>
</template>

<script setup lang="ts">
import MenuButton from '../atoms/MenuButton.vue';
import Button from '../atoms/Button.vue';
import { onMounted, onUnmounted, ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenuOpen = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const navLinks = [
	{
		to: '#hero',
		text: 'home',
	},
	{
		to: '#services',
		text: 'services',
	},
	{
		to: '#about',
		text: 'about',
	},
];

const socialLinks = [
	{
		icon: 'whatsapp',
		to: '#',
	},
	{
		icon: 'telegram',
		to: '#',
	},
	{
		icon: 'instagram',
		to: '#',
	},
];

const resizeListener = () => {
	if (window.innerWidth >= 1024) {
		isMenuOpen.value = true;
	} else {
		isMenuOpen.value = false;
	}
};

onMounted(() => {
	window.addEventListener('resize', resizeListener);
	resizeListener();
});

onUnmounted(() => {
	window.removeEventListener('resize', resizeListener);
});
</script>

<style lang="scss" scoped>
nav.header-navbar {
	width: 100%;
	display: flex;
	background-color: var(--color-primary);
	flex-wrap: wrap;
	padding: 2rem 2.6rem;

	div {
		&.logo-and-menu {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
		}

		&.nav-links {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			overflow: hidden;
			margin-top: 4rem;

			ul {
				li {
					text-align: center;
					margin-bottom: 1.6rem;
				}
			}

			&.hidden {
				margin-top: 0;
				max-height: 0;
			}
		}

		&.social-links {
			display: none;
		}
	}

	a {
		&.nav-link-anchor {
			color: var(--color-white);
			font-weight: 700;
			text-transform: uppercase;
			text-decoration: none;
			transition: color 0.25s;

			cursor: pointer;

			&:hover {
				color: var(--color-secondary);
			}
		}

		&.social-link-anchor {
			width: 3.2rem;
		}
	}
}

@media (min-width: 1024px) {
	nav.header-navbar {
		justify-content: space-evenly;

		div {
			&.logo-and-menu {
				width: auto;
				.menu-button {
					display: none;
				}
			}

			&.nav-links {
				flex-direction: row;
				width: auto;
				margin-top: 0;

				ul {
					display: flex;
					li {
						margin-bottom: 0;
						margin-right: 4rem;
					}
				}
			}

			&.social-links {
				display: flex;
				align-items: center;
				gap: 4rem;
			}
		}
	}
}
</style>

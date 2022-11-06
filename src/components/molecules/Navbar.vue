<template>
	<header class="navbar-container">
		<nav class="header-navbar">
			<div class="logo-and-menu">
				<div class="logo">
					<dotlottie-player autoplay loop :src="logoAnimation" />
				</div>
				<div class="menu-button">
					<MenuButton @click="toggleMenuOpen" />
				</div>
			</div>
			<div :class="{ 'nav-links': true, hidden: !isMenuOpen }">
				<ul>
					<li v-for="navlink of navLinks" v-once :key="navlink.to" @click="toggleMenuOpen">
						<a :href="navlink.to" class="nav-link-anchor">{{ $t(navlink.text) }}</a>
					</li>
				</ul>
				<Button variant="secondary" @click="openFlowForm"> {{ $t('global.contact') }} </Button>
			</div>
			<div class="social-links">
				<a
					class="social-link-anchor"
					v-for="socialLink of socialLinks"
					:key="socialLink.icon"
					:href="socialLink.to"
					@click.stop.prevent="goToSocialLink(socialLink.to)"
					v-once
				>
					<img :src="require(`../../assets/icons/${socialLink.icon}.svg`)" :alt="socialLink.icon" />
				</a>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
import MenuButton from '../atoms/MenuButton.vue';
import Button from '../atoms/Button.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useFlowForm } from '../../compositors/useFlowForm';
import logoAnimation from '../../assets/lottie/logo.json';
import { LINKS } from '../../constants';
const isMenuOpen = ref(false);
const toggleMenuOpen = () => {
	if (window.innerWidth < 1200) {
		isMenuOpen.value = !isMenuOpen.value;
	}
};
const { openFlowForm } = useFlowForm();

const navLinks = [
	{
		to: '#hero',
		text: 'navbar.home',
	},
	{
		to: '#method-and-originality',
		text: 'navbar.services',
	},
	{
		to: '#about',
		text: 'global.about',
	},
];

const socialLinks = [
	{
		icon: 'whatsapp',
		to: LINKS.whatsapp,
	},
	{
		icon: 'telegram',
		to: LINKS.telegram,
	},
	{
		icon: 'instagram',
		to: LINKS.instagram,
	},
];

const goToSocialLink = (link: string) => {
	window.open(link, '_blank');
};

const resizeListener = () => {
	if (window.innerWidth >= 1200) {
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
header.navbar-container {
	display: flex;
	justify-content: center;
	background-color: var(--color-primary);
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 1;
}
nav.header-navbar {
	display: flex;
	width: calc(100% - 6rem);
	max-width: 1360px;
	flex-wrap: wrap;
	padding: 1rem 0;
	min-height: 8.4rem;
	background-color: transparent;

	div {
		&.logo-and-menu {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;

			.logo {
				width: 20rem;
			}
		}

		&.nav-links {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			overflow: hidden;
			max-height: 50rem;
			transition: max-height 0.5s;

			ul {
				margin-top: 4rem;
				li {
					text-align: center;
					margin-bottom: 1.6rem;
				}
			}

			&.hidden {
				max-height: 0;
			}
		}

		> button {
			margin-bottom: 2rem;
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

@media (min-width: 1200px) {
	nav.header-navbar {
		justify-content: space-between;

		div {
			&.logo-and-menu {
				width: auto;
				.menu-button {
					display: none;
				}

				.logo {
					width: 24rem;
				}
			}

			&.nav-links {
				flex-direction: row;
				width: auto;

				ul {
					margin-top: 0;
					display: flex;
					li {
						margin-bottom: 0;
						margin-right: 4rem;
					}
				}
			}

			> button {
				margin-bottom: 0;
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

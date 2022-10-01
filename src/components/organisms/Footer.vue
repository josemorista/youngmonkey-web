<template>
	<footer>
		<main>
			<section class="footer-about">
				<div class="section-title">
					<img src="../../assets/icons/arrow.svg" alt="arrow" />
					<h2>
						{{ $t('global.about') }}
					</h2>
				</div>
				<p>
					{{ $t('footer.about') }}
				</p>
			</section>

			<section class="footer-follow-us">
				<div class="section-title">
					<img src="../../assets/icons/arrow.svg" alt="arrow" />
					<h2>
						{{ $t('footer.follow_us') }}
					</h2>
				</div>
				<ul class="social-links">
					<li v-for="social of socialLinks" v-once :key="social.name">
						<a :href="social.to">
							<img :src="require(`../../assets/icons/${social.icon}`)" :alt="social.name" />
							<span>{{ social.name }}</span>
						</a>
					</li>
				</ul>
			</section>

			<section class="footer-logo">
				<img src="../../assets/icons/logo.svg" alt="logo" />
			</section>

			<section class="footer-contact">
				<div class="contact-mail">
					<img src="../../assets/icons/arrow.svg" alt="arrow" />
					<a href=""> contato@youngmonkey.com </a>
					<img src="../../assets/icons/arrow.svg" alt="arrow" />
				</div>
				<Button variant="secondary">{{ $t('global.contact_us') }}</Button>
			</section>

			<section class="footer-language-selector">
				<p>Português brasileiro</p>
			</section>

			<section class="footer-copyright">
				<p>
					{{ $t('footer.copyright') }}
				</p>
			</section>
		</main>
	</footer>
</template>

<script setup lang="ts">
import Button from '../atoms/Button.vue';
const socialLinks = [
	{
		icon: 'facebook.svg',
		to: '#',
		name: 'Facebook',
	},
	{
		icon: 'instagram-footer.svg',
		to: '#',
		name: 'Instagram',
	},
	{
		icon: 'twitter.svg',
		to: '#',
		name: 'Twitter',
	},
	{
		icon: 'youtube.svg',
		to: '#',
		name: 'Youtube',
	},
];
</script>

<style lang="scss" scoped>
footer {
	display: flex;
	justify-content: center;
	background-color: var(--color-primary);
	> main {
		display: grid;
		width: calc(100% - 4rem);
		padding: 3rem 0;
		max-width: 1360px;

		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(5, auto);

		grid-template-areas:
			'about about'
			'follow-us logo'
			'contact contact'
			'language-selector language-selector'
			'copyright copyright';

		p,
		span,
		a {
			color: var(--color-white);
		}

		div {
			&.section-title {
				display: flex;
				align-items: center;
				gap: 2px;
				margin-bottom: 2.4rem;

				img {
					width: 6px;
				}

				h2 {
					font-size: 2.4rem;
					font-family: 'Bebas Neue';
					color: var(--color-secondary);
				}
			}

			&.contact-mail {
				display: flex;
				gap: 6px;
				margin-bottom: 3.2rem;
				align-items: center;

				a {
					font-size: 2.4rem;
				}

				> img:last-child {
					transform: rotateY(180deg);
				}
			}
		}

		> section.footer {
			&-about {
				grid-area: about;
				margin-bottom: 2.4rem;
			}

			&-follow-us {
				grid-area: follow-us;
				ul {
					> li {
						margin-bottom: 2.4rem;

						a {
							display: flex;
							align-items: center;
							gap: 1.6rem;
							text-decoration: none;

							img {
								width: 2.4rem;
								height: 2.4rem;
							}
						}
					}
				}
			}

			&-logo {
				grid-area: logo;
				justify-self: flex-end;
				align-self: center;

				img {
					width: 12rem;
				}
			}

			&-contact {
				margin-top: 3.4rem;
				grid-area: contact;
				justify-self: center;
				text-align: center;
			}

			&-language-selector {
				grid-area: language-selector;
				justify-self: center;
				margin: 6rem 0;
			}

			&-copyright {
				grid-area: copyright;
				justify-self: center;
				text-align: center;
			}
		}
	}
}

@media (min-width: 1024px) {
	footer {
		> main {
			grid-template-columns: 42rem 30rem 1fr;
			grid-template-rows: repeat(3, auto);
			column-gap: 4.8rem;

			grid-template-areas:
				'about follow-us logo'
				'about follow-us contact'
				'copyright copyright language-selector';

			> section.footer {
				&-logo {
					justify-self: center;
				}

				&-language-selector {
					align-self: flex-end;
				}

				&-copyright {
					text-align: right;
					align-self: flex-end;
					justify-self: flex-start;
				}
			}
		}
	}
}
</style>

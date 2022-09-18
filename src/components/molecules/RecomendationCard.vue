<template>
	<div class="recomendation-card">
		<header>
			<img class="enterprise-img" src="../../assets/img/dolby.png" alt="" />
		</header>
		<main>
			<div class="quote">
				<img src="../../assets/icons/quote.svg" alt="''" />
			</div>
			<p class="recomendation-text">
				<cite>
					Working with YoungMonkey was great. They created a very professional video in a short time frame with very
					little guidance from me. Updates and improvements were very quickly integrated. I would definitely work with
					YongMonkey again.
				</cite>
			</p>
			<div class="quote quote-end">
				<img src="../../assets/icons/quote.svg" alt="''" />
			</div>
		</main>
		<footer>
			<img class="author-img" src="../../assets/img/brian.png" alt="" />
			<div class="author-info">
				<p class="author">Brian Arnott</p>
				<p class="author-position">Director, Dolby Australia</p>
			</div>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
div.recomendation-card {
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	padding: 1.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	> header,
	footer,
	main {
		width: 100%;
	}

	div {
		&.quote {
			height: 2.4rem;
			margin: 1rem 0;
			img {
				height: 100%;
			}
			&.quote-end {
				transform: rotate(180deg);
			}
		}
	}

	p {
		&.recomendation-text {
			text-align: center;
			cite {
				line-height: 2rem;
				font-style: normal;
			}
		}

		&.author {
			text-transform: uppercase;
			font-size: 2.4rem;
			font-family: 'Bebas Neue';
		}
	}

	img {
		&.enterprise-img {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			object-fit: cover;
		}

		&.author-img {
			width: 4.8rem;
			height: 4.8rem;
			border-radius: 50%;
		}
	}

	footer {
		display: flex;
		gap: 0.5rem;
		align-items: flex-end;
	}
}

@media (min-width: 1024px) {
	div.recomendation-card {
		padding: 4rem;

		> main {
			display: flex;
			align-items: center;
			margin-bottom: 1.6rem;
		}

		> main,
		footer {
			max-width: 1075px;
		}

		img {
			&.enterprise-img {
				width: 9rem;
				height: 9rem;
			}

			&.author-img {
				width: 8rem;
				height: 8rem;
			}
		}
	}
}
</style>

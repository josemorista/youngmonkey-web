<template>
	<div class="recommendation-card">
		<header>
			<img
				class="enterprise-img"
				:src="require(`../../assets/img/${recommendation.author.enterprise.picture}`)"
				:alt="recommendation.author.enterprise.name"
			/>
		</header>
		<main>
			<div class="quote">
				<img src="../../assets/icons/quote.svg" alt="''" />
			</div>
			<p class="recommendation-text">
				<cite>
					{{ recommendation.citation }}
				</cite>
			</p>
			<div class="quote quote-end">
				<img src="../../assets/icons/quote.svg" alt="''" />
			</div>
		</main>
		<footer>
			<img
				class="author-img"
				:src="require(`../../assets/img/${recommendation.author.picture}`)"
				:alt="recommendation.author.name"
			/>
			<div class="author-info">
				<p class="author">{{ recommendation.author.name }}</p>
				<p class="author-position">{{ recommendation.author.position }}</p>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { Recommendation } from 'src/entities/Recommendation';
import { defineProps } from 'vue';
interface RecommendationCardProps {
	recommendation: Recommendation;
}
defineProps<RecommendationCardProps>();
</script>

<style lang="scss" scoped>
div.recommendation-card {
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
		&.recommendation-text {
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

@media (min-width: 1200px) {
	div.recommendation-card {
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

<template>
	<div class="your-video">
		<div class="highlight-and-content">
			<video autoplay="true" muted="true" loop="true" controls="true" ref="videoRef"></video>
			<div class="highlight-content">
				<h1>
					{{ $t('your_video.title_part1') }}
					<strong>
						{{ $t('global.video') }}
					</strong>
					{{ $t('your_video.title_part2') }}
					<strong>
						{{ $t('global.creative') }}
					</strong>
				</h1>
				<p>
					{{ $t('your_video.content_part1') }}
				</p>
				<p>
					{{ $t('your_video.content_part2') }}
				</p>
				<Button variant="secondary" @click="openFlowForm">{{ $t('your_video.button') }}</Button>
			</div>
		</div>
		<ul>
			<li v-for="(videoOption, index) in availableVideos" :key="videoOption.id" @click="setActiveVideo(index)">
				<img :src="require(`../../assets/img/thumbnails/${videoOption.thumbnail}`)" alt="video option" />
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useFlowForm } from '../../compositors/useFlowForm';
import { onMounted, ref } from 'vue';
import Button from '../atoms/Button.vue';
const activeVideo = ref(0);
const videoRef = ref<HTMLVideoElement>();

const { openFlowForm } = useFlowForm();

const setActiveVideo = (index: number) => {
	activeVideo.value = index;
	if (videoRef.value) {
		videoRef.value.src = require(`../../assets/videos/${availableVideos[activeVideo.value].video}`);
		if (window.innerWidth < 1024) {
			videoRef.value.scrollIntoView();
		}
	}
};

const availableVideos = [
	{
		id: 1,
		thumbnail: 'backTo.jpg',
		video: 'Back o the future pixelart.mp4',
	},
	{
		id: 2,
		thumbnail: 'lila.gif',
		video: 'Vinheta Lila Liloca.mp4',
	},
	{
		id: 3,
		thumbnail: 'market.jpg',
		video: 'Stories Qual Oferta.mp4',
	},
];

onMounted(() => {
	setActiveVideo(0);
});
</script>

<style lang="scss">
div.your-video {
	margin-top: 8rem;

	div {
		&.highlight-and-content {
			display: flex;
			flex-wrap: wrap;
			gap: 4rem;

			video {
				width: 100%;
			}

			button {
				margin-top: 4rem;
				padding-top: 2rem;
				padding-bottom: 2rem;
			}
		}

		&.highlight-content {
			display: flex;
			flex-direction: column;

			h1 {
				color: var(--color-primary);
				font-size: 6.4rem;
				font-family: 'Bebas Neue';
				text-transform: uppercase;
				text-align: center;

				strong {
					font-family: inherit;
					color: var(--color-secondary);
				}
			}

			p {
				text-align: center;
				margin-top: 2.4rem;
			}
		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin-top: 4rem;

		li {
			width: 42rem;
			max-width: 100%;
			cursor: pointer;
			transition: 0.5s opacity;

			&:hover {
				opacity: 0.7;
			}

			img {
				width: 100%;
				object-fit: cover;
				max-height: 24rem;
			}
		}
	}
}
@media (min-width: 1024px) {
	div.your-video {
		div {
			&.highlight-and-content {
				video {
					width: 90rem;
					max-width: 80%;
				}
			}

			&.highlight-content {
				flex: 1;
				justify-content: space-between;

				h1 {
					font-size: 8rem;
					line-height: 1;
				}

				h1,
				p {
					text-align: left;
				}
			}
		}

		ul {
			justify-content: space-between;
			gap: 0;
			margin-top: 5.6rem;

			li {
				width: 32%;
			}
		}
	}
}
</style>

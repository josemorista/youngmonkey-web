<template>
	<div class="your-video" id="about">
		<div class="highlight-and-content">
			<iframe
				ref="videoRef"
				:src="`${availableVideos[activeVideo].video}&loop=1&autoplay=${isFirstInteraction ? '0' : '1'}`"
				frameborder="0"
				allow="fullscreen; picture-in-picture"
				title="presentation"
				allowfullscreen
			></iframe>

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
				<img :src="videoOption.thumbnail" alt="video option" />
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useFlowForm } from '../../compositors/useFlowForm';
import { onMounted, onUnmounted, ref } from 'vue';
import Button from '../atoms/Button.vue';
const activeVideo = ref(0);
const isFirstInteraction = ref(true);

const videoRef = ref<HTMLIFrameElement>();

const { openFlowForm } = useFlowForm();

const setActiveVideo = (index: number) => {
	isFirstInteraction.value = false;
	activeVideo.value = index;
	if (videoRef.value) {
		if (window.innerWidth < 1024) {
			videoRef.value.scrollIntoView();
		}
	}
};

const availableVideos = [
	{
		id: 1,
		thumbnail:
			'https://i.vimeocdn.com/video/1482163896-0e8104c4d2a43d755cc3b825093f9c84d0afec8823097eded451be3b3f399383-d?mw=1100&mh=619&q=70',
		video:
			'https://player.vimeo.com/video/736630974?h=a6a9e21c80&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
	{
		id: 2,
		thumbnail:
			'https://i.vimeocdn.com/video/1482170226-184ba1651033fd8c9a98921605d77d90aaecb10aa767d21f16d0d2ff409f7707-d?mw=1300&mh=756&q=70',
		video:
			'https://player.vimeo.com/video/736633886?h=37bf5bbd39&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
	{
		id: 3,
		thumbnail:
			'https://i.vimeocdn.com/video/1482173216-760615b45603c29d5e60ef0c1ee2f6fd30ff0d7eff4f4c2b5ae763bd23d4ef17-d?mw=1300&mh=756&q=70',
		video:
			'https://player.vimeo.com/video/736636644?h=964706a1ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
];

let observer: IntersectionObserver;
onMounted(() => {
	observer = new IntersectionObserver((entries) => {
		if (isFirstInteraction.value) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveVideo(0);
				}
			});
		}
	});
	if (videoRef.value) observer.observe(videoRef.value);
});
onUnmounted(() => {
	observer.disconnect();
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

			iframe {
				width: 100%;
				min-height: 20rem;

				.player {
					width: 100%;
					height: 100%;
				}
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
		justify-content: center;
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

@media (min-width: 768px) {
	div.your-video {
		div {
			&.highlight-and-content {
				iframe {
					min-height: 30rem;
				}
			}
		}
	}
}

@media (min-width: 1200px) {
	div.your-video {
		div {
			&.highlight-and-content {
				iframe {
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

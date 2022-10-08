<template>
	<div class="auto-tab">
		<ul>
			<li v-for="(tab, index) in tabs" :key="`auto-tab-${index}`" @click="setCurrentTab(index)">
				<Tab
					:active="activeTab === index"
					:transition-time="tab.transition"
					:title="tab.title"
					:content="tab.content"
				/>
				<div :class="{ 'tab-image': true, active: activeTab === index }">
					<LottieAnimation
						:loop="true"
						:autoPlay="true"
						:animationData="require(`../../assets/lottie/${tabs[activeTab]?.animation}`)"
					/>
				</div>
			</li>
		</ul>
		<div class="current-tab-image">
			<LottieAnimation
				:loop="true"
				:autoPlay="true"
				:animationData="require(`../../assets/lottie/${tabs[activeTab]?.animation}`)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { LottieAnimation } from 'lottie-web-vue';
import Tab from '../molecules/Tab.vue';

const activeTab = ref(0);
const { t } = useI18n();

const tabs = computed(() => [
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab1_title'),
		content: t('method_and_originality.auto_tab.tab1_content'),
		animation: 'hero-rocket.json',
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab2_title'),
		content: t('method_and_originality.auto_tab.tab2_content'),
		animation: 'hero-rocket.json',
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab3_title'),
		content: t('method_and_originality.auto_tab.tab3_content'),
		animation: 'hero-rocket.json',
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab4_title'),
		content: t('method_and_originality.auto_tab.tab4_content'),
		animation: 'hero-rocket.json',
	},
]);

let timeoutHandler: number;
const setNextTab = () => {
	if (activeTab.value < tabs.value.length - 1) {
		activeTab.value++;
	} else {
		activeTab.value = 0;
	}
	timeoutHandler = setTimeout(setNextTab, tabs.value[activeTab.value].transition * 1000);
};

const clearTimeoutHandler = () => {
	if (timeoutHandler) clearTimeout(timeoutHandler);
};

const setCurrentTab = (tabIndex: number) => {
	activeTab.value = tabIndex;
	clearTimeoutHandler();
	timeoutHandler = setTimeout(setNextTab, tabs.value[activeTab.value].transition * 1000);
};

onMounted(() => {
	setNextTab();
});

onUnmounted(() => {
	clearTimeoutHandler();
});
</script>

<style lang="scss" scoped>
.auto-tab {
	ul {
		li {
			& + li {
				margin-top: 2rem;
			}
		}
	}

	.tab-image {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-y: hidden;
		margin-top: 1.6rem;
		max-height: 0;
		transition: max-height 0.5s;

		> * {
			width: 28rem;
			height: 28rem;
		}

		&.active {
			max-height: 30rem;
		}
	}

	.current-tab-image {
		display: none;
	}
}

@media (min-width: 1024px) {
	.auto-tab {
		display: flex;
		align-items: center;
		justify-content: space-between;

		ul {
			max-width: 60rem;
			li {
				& + li {
					margin-top: 4rem;
				}
			}
		}
		.tab-image {
			display: none;
		}

		.current-tab-image {
			display: block;
			width: 100%;
			height: 44rem;
			max-height: 44rem;
			max-width: 44rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>

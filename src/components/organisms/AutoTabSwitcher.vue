<template>
	<div class="auto-tab" v-if="activeTab >= 0">
		<ul>
			<li v-for="(tab, index) in tabs" :key="`auto-tab-${index}`" @click="setCurrentTab(index)">
				<Tab
					:active="activeTab === index"
					:transition-time="tab.transition"
					:title="tab.title"
					:content="tab.content"
				/>
				<div :class="{ 'tab-image': true, active: activeTab === index }">
					<img :src="tab.img" :alt="tab.title" />
				</div>
			</li>
		</ul>
		<div class="current-tab-image">
			<img :src="tabs[activeTab].img" :alt="tabs[activeTab].title" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Tab from '../molecules/Tab.vue';

const activeTab = ref(-1);
const { t } = useI18n();

const tabs = computed(() => [
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab1_title'),
		content: t('method_and_originality.auto_tab.tab1_content'),
		img: require('../../assets/img/autoTab/copywriter.png'),
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab2_title'),
		content: t('method_and_originality.auto_tab.tab2_content'),
		img: require('../../assets/img/autoTab/filmmaker.png'),
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab3_title'),
		content: t('method_and_originality.auto_tab.tab3_content'),
		img: require('../../assets/img/autoTab/editing.png'),
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab4_title'),
		content: t('method_and_originality.auto_tab.tab4_content'),
		img: require('../../assets/img/autoTab/animation.png'),
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

@media (min-width: 1200px) {
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

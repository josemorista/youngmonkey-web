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
				<div class="tab-image" v-if="activeTab === index">
					<img src="" alt="" />
				</div>
			</li>
		</ul>
		<div class="current-tab-image">
			<img :src="tabs[activeTab]?.image" :alt="activeTab + ''" />
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
		image: 'red',
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab2_title'),
		content: t('method_and_originality.auto_tab.tab2_content'),
		image: 'red',
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab3_title'),
		content: t('method_and_originality.auto_tab.tab3_content'),
		image: 'red',
	},
	{
		transition: 5,
		title: t('method_and_originality.auto_tab.tab4_title'),
		content: t('method_and_originality.auto_tab.tab4_content'),
		image: 'red',
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
@keyframes load-tab-image {
	from {
		transform: scaleY(0);
	}
	to {
		transform: scaleY();
	}
}
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
		animation-name: load-tab-image;
		animation-duration: 0.8s;
		transform-origin: top right;

		> * {
			width: 28rem;
			height: 28rem;
			background-color: #d9d9d9;
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
			background-color: #d9d9d9;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>

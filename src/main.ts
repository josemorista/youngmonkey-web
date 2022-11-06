import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import LottieAnimation from 'lottie-web-vue';
import ptBr from './translations/pt-br.json';

const i18n = createI18n({
	locale: 'pt-br',
	fallbackLocale: 'pt-br',
	legacy: false,
	messages: {
		'pt-br': ptBr,
	},
});

const locales: Array<string> = i18n.global.availableLocales;
if (locales.includes(navigator.language)) {
	i18n.global.locale.value = navigator.language as any;
}

createApp(App).use(i18n).use(LottieAnimation).mount('#app');

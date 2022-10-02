import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

import ptBr from './translations/pt-br.json';
import { ALLOWED_LANGUAGES } from './constants';

const defaultLocale = ALLOWED_LANGUAGES.includes(navigator.language) ? navigator.language : ALLOWED_LANGUAGES[0];

const i18n = createI18n({
	locale: defaultLocale,
	fallbackLocale: ALLOWED_LANGUAGES[0],
	legacy: false,
	messages: {
		'pt-br': ptBr,
	},
});

createApp(App).use(i18n).mount('#app');

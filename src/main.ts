import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

import ptBr from './translations/pt-br.json';

const i18n = createI18n({
	locale: 'pt-br',
	fallbackLocale: 'pt-br',
	messages: {
		'pt-br': ptBr,
	},
});

createApp(App).use(i18n).mount('#app');

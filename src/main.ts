import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/install';
import vuetify from './plugins/Vuetify';
import * as filters from './filters';
import i18n from './plugins/i18n';

Object.keys(filters).forEach((key: string) =>
  Vue.filter(key, (filters as any)[key])
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

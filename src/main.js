import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import store from './store';
import credentials from './credentials';

Vue.use(VueGoogleMaps, {
  load: {
    key: credentials['google-api-key'],
  },
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';

// import router from './router';
// import store from './store';
import './assets/css/main.css';

import './assets/tailwind.css';

// createApp(App).use(store).use(router).mount('#app');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

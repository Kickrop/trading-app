import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

vue.http.options.root = "https://vuejs-stock-trader-f3e0a.firebaseio.com/";

Vue.filter('currency', (value) => {
  return "$" + value.toLocaleString();
  // .toLocaleString('en-US')
});

const router = new VueRouter({
  mode: 'history',
  routes //routes : routes
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import ico from 'material-icons';
import Route from 'vue-router';
import routes from './router/route';
Vue.use(Route);
Vue.use(MuseUI);
Vue.use(ico);

const router = new Route({routes});
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

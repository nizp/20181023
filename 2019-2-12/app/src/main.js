import Vue from 'vue'
import App from './App.vue'
import router from './router'
import RegMatch from './reg_match.vue';
// Vue.config.productionTip = false

new Vue({
  render: h => h(RegMatch)
}).$mount('#app')

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

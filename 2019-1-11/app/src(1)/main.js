import Vue from 'vue'
import App from './App.vue'
import Route from 'vue-router';
Vue.use(Route);
import routes from './router/routes';
// console.log(Route);

/*
  注意:

    在new vue-router 的时候，通过**routes**来引配置数组。
    new Vue的时候是通过**router**来引路由的
*/
let router = new Route({routes});  //routes

new Vue({
  router,
  // router:router, //router
  render: h => h(App)
}).$mount('#app')

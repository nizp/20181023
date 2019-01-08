// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue';
import router from './route/route';

/*
  使用vue-router
    1.安装:npm i vue-router

    2.引包
      import VueRouter from 'vue-router';
    3.
      引用:
        Vue.use(VueRouter);

    4.需要配置router  ->  route.js

    5.
      在页面中引入一个<router-view>

    
    用vue-cli 直接vue create 项目名称就搞定了

    单页SPA


*/

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

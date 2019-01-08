// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//定义组件，未来都是引入的
let app = {
    template:'<div>app</div>'
}
let ppa = {
    template:'<div>ppa</div>'
}

/*
    配置路由表:配置什么路径就显示什么组件
        '/' -> app

        '/ppa'  -> ppa
*/

import Child from '../components/child.vue'

const routes = [
    {
        path:'/',
        component:app
    },
    {
        path:'/ppa',
        component:ppa
    },
    {
        path:'/child',
        component:Child
    }
];

export default new VueRouter({
    routes
});





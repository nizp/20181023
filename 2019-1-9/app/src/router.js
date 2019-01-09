import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Aaa from './views/aboutchildren/aaa.vue';
import Bbb from './views/aboutchildren/bbb.vue';
import Ccc from './views/aboutchildren/ccc.vue';
import b1 from './views/aboutchildren/b1.vue';
import index from './views/index.vue';
import temp from './views/temp.vue';


Vue.use(Router)

// let routes = [
//   {
//     path: '/',
//     component: Home
//   },
//   //   app.use('/about',require('./about'))
//   //   app.get('/',()=>{})  
//   //   app.get('/aaa',()=>{})  
//   {
//     path: '/about',
//     component:About,
//     children:[
//       {
//         path:'a',
//         name:'aaa',
//         component:Aaa
//       },
//       {
//         path:'b',
//         name:'bbb',
//         component:Bbb
//       },
//       {
//         path:'c',
//         component:Ccc
//       }
//     ]
//   }
// ]

/*
  动态路由:
  path:'/:num'意思是：
  只要是根下的任意路径都能匹配到，通过$route.params.num获取
    比如:
      /a  /b  /c
*/
// let routes = [
//   {
//     path:'/:num',
//     component:temp
//   }
// ]

//编程式路由
let routes = [
  {
    path:'/a',
    component:Aaa
  },
  {
    path:'/b',
    component:Bbb,
    children:[
      {
        path:'/b/b1',
        component:b1
      }
    ]
  },
  {
    path:'/c',
    component:Ccc
  },
]



export default new Router({
  mode: 'history',//   #/2.html    /2.html
  linkExactActiveClass:'seractive',
  base: process.env.BASE_URL,
  routes
})

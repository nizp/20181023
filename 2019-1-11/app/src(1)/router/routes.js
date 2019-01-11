import Home from '../components/HelloWorld.vue';
import About from '../components/About';
import Ta from '../components/aboutchildren/ta.vue';
import Wo from '../components/aboutchildren/wo.vue';
import Tamen from '../components/aboutchildren/wo_components/tamen.vue';
export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/about',
        component:About,
        // meta:{
        //     page:'/about/ta'
        // },
        children:[
            {
                path:'/about/ta',
                component:Ta,
                // meta:{
                //     page:'/about/ta'
                // }
            },
            {
                path:'wo',
                component:Wo,
                children:[
                    {
                        path:'tamen/:name',
                        name:'tamen',
                        component:Tamen
                    }
                ]
            }
        ]
    },
    {
        path:'/about2',
        component:About,
        // meta:{
        //     page:'/about2/ta'
        // },
        children:[
            {
                path:'/about2/ta',
                component:Ta,
                // meta:{
                //     page:'/about2/ta'
                // }
            },
        ]
    },
    {
        path:'/gogo',
        // redirect:'/about/wo'
        redirect:to=>{
            console.log(to);
            return '/about/wo'
           
        }
    }

];
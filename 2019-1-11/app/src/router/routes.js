import Home from '../components/HelloWorld.vue';
import About from '../components/About';
import Ta from '../components/aboutchildren/ta.vue';
import Wo from '../components/aboutchildren/wo.vue';
import Tamen from '../components/aboutchildren/wo_components/tamen.vue';
import login from '../components/login.vue';
export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:login,
        name:'login'
    },
    {
        path:'/about',
        // redirect:{name:'login'}
        redirect:to=>{
            let {query} = to;
            if(query.onoff){
                return '/about3';
            }else{
                return '/login';
            }
            // return '/login';
        }
    },
    {
        path:'/about3',
        component:About,
        children:[
            {
                path:'/about/ta',
                component:Ta,
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
        children:[
            {
                path:'/about2/ta',
                component:Ta,
            },
        ]
    }

];
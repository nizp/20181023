import Home from '../components2/home';
import Gn from '../components2/gn';
import Gj from '../components2/gj';
import Ls from '../components2/ls';
import Cview from '../components2/contentview';

export default [
    {
        path:'/',
        component:Home
    },
    
    {
        path:'/gn',
        component:Gn
    },
    {
        path:'/gj',
        component:Gj
    },
    {
        path:'/ls',
        component:Ls
    },
    {
        path:'/cview/:docid',
        component:Cview
    }
]
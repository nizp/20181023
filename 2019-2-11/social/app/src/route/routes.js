import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../components/Home';
import Aboute from '../components/Aboute';

let routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/content',
        component:Aboute
    }
];
let route = routes.map((e,i)=>{
    return <Route exact path={e.path} component={e.component} key={i}/>
});
export default route;





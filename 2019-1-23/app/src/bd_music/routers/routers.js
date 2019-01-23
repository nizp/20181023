import React from 'react';
import {Route} from 'react-router-dom';

import Addto from '../components/addto';
import Collection from '../components/collection';
import List from '../components/list';
let routers = [
    {
        path:'/',
        component:List
    },
    {
        path:'/addto',
        component:Addto
    },
    {
        path:'/collection',
        component:Collection
    },
]

function render(arr){
    return arr.map((ele,i)=>{
        return (
            <Route 
                path={ele.path}
                exact
                component={ele.component}
                key={i}
            />
        );
    });
}

export default render(routers);



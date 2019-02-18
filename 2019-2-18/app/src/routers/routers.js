import React, { Component } from 'react';
import { Route,Redirect,Switch} from 'react-router-dom';
import Home from '../components/home/Home';
import Rank from '../components/rank/Rank';
import Plist from '../components/plist/Plist'
import Singer from '../components/singer/Singer'


/* 
    https://www.npmjs.com/package/react-router-config
*/
let router = [
    {
        path:'/',
        component:Home,
        // exact:true,
        // fns:'render'
    },
    {
        path:'/rank',
        component:Rank
    },
    {
        path:'/plist',
        component:Plist
    },
    {
        path:'/singer',
        component:Singer
    }
];

let rs = router.map((item,index)=>{
    let {path,component,exact,fns='component'} = item;
    //fns = compoent|render|children
    let ct = null;
    /*
        compoent={Index}
        render=()=><Index />
        children=()=><Index />
    */

    switch (fns) {
        case 'render':
                // component = (props)=>{
                //     return '<'+ component + '/>'
                // }
            break;
        default:
                ct =  item.component
            break;
    }
    // console.log(fns)
    return (
        <Route {...{
            path,
            component:ct,
            exact:true,
            key:index
        }}/>
    )
})

console.log(rs);

class Routers extends Component {
    render() { 
        
        return (
            <Switch>
                {rs}
            </Switch>
        );
    }
}
 
export default Routers
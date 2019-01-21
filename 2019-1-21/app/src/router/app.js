import React, { Component } from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Aboutc from './component/aboutc';
import Aboutd from './component/aboutd';
class App extends Component {
    render() { 
        return (
            <div>
               <Link to="/">首页</Link>
               <Link to="/about">关于</Link>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" render={(props)=>{
                        return <About {...props}/>
                    }}/>
                    <Switch>
                        <Route path="/about/d" component={Aboutd}/>
                        <Route path="/about/:id" component={Aboutc}/>
                    </Switch>
               
               {/* <Route path="/about" component={About}/> */}
            </div>

        );
    }
}

export default App;
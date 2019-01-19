import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Detail from './detail';
import D1 from './d1';
import D2 from './d2';

let H = (props)=>{
    // console.log(props);
    return <Home {...props}/>
}
class App extends Component {
    render() { 
        return (
            <div>
                <Link to="/"><button>去home页</button></Link>
                <Link to="/about"><button>去about页</button></Link>
                <Link to="/detail"><button>去detail页</button></Link>

                <Route  path="/" exact component={H}/>
                <Route path="/about" component={About}/>
                <Route exact path="/detail" children={()=>{
                    return <Detail />
                }}/>
                <Route  path="/detail/:id" render={({match:{params:{id}}})=>{
                    // console.log(id);
                    switch (id) {
                        case 'd1':
                            return <D1 />
                        case 'd2':
                            return <D2 />
                        default:
                            return  <D1 />;
                    }
                }}/>
                
            </div>
        );
    }
}
 
export default App;
import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Detail from './detail';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Link to="/"><button>去home页</button></Link>
                <Link to="/about"><button>去about页</button></Link>
                <Link to="/detail"><button>去detail页</button></Link>
                <Route 
                    path="/" 
                    component={Home}
                    exact
                />
                <Route 
                    path="/about" 
                    component={About}
                />
                {/* /detail/  */}
                <Route 
                    path="/detail" 
                    component={Detail}
                />
                
            </div>
        );
    }
}
 
export default App;
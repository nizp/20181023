import React, { Component } from 'react';
import { Link,Route,Redirect} from 'react-router-dom';
import Public from './public';
import Por from './por';
import Login from './login';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onoff:false
        }
    }
    on = ()=>{
        // let {onoff} = this.state;
        // onoff = true;
        this.setState({onoff:true});
    }
    off = () => {
        this.setState({onoff:false});
    }
    render() { 
        let {onoff} = this.state;
        console.log(onoff)
        return (
            <div>
                <Link to="/public">
                    <button>公共</button>
                </Link>
                <Link to="/por">
                    <button>私有</button>
                </Link>

                <Route path="/public" component={Public}/>
                <Route path="/login"  render={({history})=>(<Login history={history} on={this.on}/>)}/>
                <Route path="/por" render={({history})=>{
                    if(onoff){
                        return <Por 
                                {...{
                                    history,
                                    off:this.off
                                }}
                            />
                    }else{
                        return <Redirect to="/login" />
                    }
                }}/>
            </div>
        );
    }
}
 
export default App;
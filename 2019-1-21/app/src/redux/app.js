import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component {
    add = () => {
        let {dispatch} = this.props;
        dispatch({type:"INCREMENT"});
    }
    add2 = () => {
        let {dispatch} = this.props;
        dispatch({type:"INCREMENT_T",payload:2});
    }
    render() { 
        console.log(this.props);
        
        return (
            <div>
                <button
                    onClick={this.add}
                >{this.props.r1.num}</button>
                <button
                    onClick={this.add2}
                >{this.props.r2.num}</button>
            </div>
        );
    }
}
 
/*
(state)=>{
    console.log(state);
    return state;
}
*/
export default connect((state)=>state)(App);
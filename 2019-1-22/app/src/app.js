import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
// import { add,increment } from './actioncreators/actions';
import * as actioncreats from './actioncreators/actions';

class App extends Component {
    click = () => {
        // this.props.store.dispatch({type:'ADD'});
        // this.props.dispatch({type:'ADD'});
        // this.props.dispatch(actioncreats.add());
        this.props.add();
        // console.log(this.props)
    }
    render() { 
        // console.log(this.props.store.getState().r1)
        console.log(this.props);
        let {num} = this.props;
        return (
            <div>
              <button onClick={this.click}>+</button>
              {num}
            </div>
        );
    }
}


export default connect((state)=>{
    /*
        !!!此处一定要返回一个对象

        可以选择这个组件能用的数据。默认全部数据都返回。
    */
//    console.log(state);
   return {num:state.r1};
},(dispatch)=>{
    return bindActionCreators(actioncreats,dispatch)
})(App);
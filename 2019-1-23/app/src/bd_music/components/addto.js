import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actioncreators from '../actioncreators/actioncreate';

class Addto extends Component {
    render() { 
        let {gocart:{arr,sum,total},increment,decrement} = this.props; 
       
        let list = arr.map((e,i)=>{
            return  (
                <li className="xg-list" key={i}>
                    <div></div>
                    <span>{e.name}</span>
                    <div className="xg">
                        <button onClick={()=>{decrement(e.id)}}>-</button>
                        <span>{e.num}</span>
                        <button onClick={()=>{increment(e.id)}}>+</button>
                        <span>￥{e.price}</span>
                    </div>
                    <span>{e.singer}</span>
                </li>
            );
        });
        
       
        return ( 
            <div>
                addto
                <ul id="list">
                    {list}
                </ul>
                <div>
                    <p>总计:￥{total.toFixed(2)}元</p> 
                    <p>数量:{sum}</p>
                </div>
            </div>
        );
    }
}
export default connect((state)=>state,(dispatch)=>{
    return bindActionCreators(actioncreators,dispatch);
})(Addto);
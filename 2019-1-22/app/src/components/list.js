import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actioncreators from '../百度音乐/actioncreators/actioncreate';
class List extends Component {
    checkedone = (id) => {
        let {checked} = this.props;
        checked(id,'arr');
    }
    colle = (id) => {
        this.props.changeCollect(id);
    }
    render() { 
        let {arr} = this.props;
        // console.log(arr);
        let list = arr.map((ele,i)=>{
            return (
                <li 
                    key={i} 
                    style={{background:(ele.checked?'red':'')}}
                    className={i%2?'br':''}
                >
                    <div
                        onClick={()=>{this.checkedone(ele.id)}}
                    >{ele.checked?'✔':''}</div>
                    <span className="w">{ele.name}</span>
                    <span 
                        className={ele.like?'red':''}
                        onClick={()=>{this.colle(ele.id)}}
                    >收藏</span>
                    <span className="sc">{ele.singer}</span>
                </li>
            );
        });
        return ( 
            <div>
                <ul id="list">
                    {list}
                </ul>
            </div>
        );
    }
}
 
export default connect((state)=>state,(dispatch)=>{
    return bindActionCreators(actioncreators,dispatch);
})(List);
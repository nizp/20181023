import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actioncreators from '../actioncreators/actioncreate';
class List extends Component {
    checkedone = (id) => {
        let {location:{pathname},checked} = this.props;
        checked(id,pathname);
    }
    colle = (id) => {
        //把需要收藏的ID记录下来
        this.props.changeCollect(id);
    }
    addcart = (ev,data) => {
        this.props.addcart(data);
        this.props.increment(data.id);
        // ev.target.disabled = true;
        // console.log(this.props);
    }
    render() { 
        let {reducer:{arr}} = this.props;
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
                    <button
                        onClick={(ev)=>{this.addcart(ev,ele)}}
                    >添加购物车</button>
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
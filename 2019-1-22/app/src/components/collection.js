import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actioncreators from '../百度音乐/actioncreators/actioncreate';
class Collection extends Component {
    click = (id)=>{
        this.props.checked(id,'arr2');
    }
    render() { 
        // console.log(this.props.arr);
        let list = this.props.arr2.map((elem,i)=>{
            return (
                <li 
                    key={i}
                    style={{background:(elem.checked?'red':'')}}
                    className={i%2?'br':''}
                >
                    <div 
                        onClick={()=>{this.click(elem.id)}}
                    >{elem.checked?'✔':''}</div>
                    <span>{elem.name}</span>
                    <span>{elem.singer}</span>
                </li>
            );
        })
        return ( 
            <div>
                coll
                <ul id="list">
                    {list}
                </ul>
            </div>
        );
    }
}

export default connect((state)=>state,(dispatch)=>{
    return bindActionCreators(actioncreators,dispatch);
})(Collection);
 
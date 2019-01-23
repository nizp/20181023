import React, { Component } from 'react'
class Addto extends Component {
    render() { 
        let list = (<li>
            <div></div>
            <span>泡沫</span>
            <span>邓紫棋</span>
        </li>);
        return ( 
            <div>
                addto
                <ul id="list">
                    {list}
                </ul>
            </div>
        );
    }
}
 
export default Addto;
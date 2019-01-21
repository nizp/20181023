import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class BackHome extends Component {

    back = () => {
        this.props.history.push('/');
    }
    render() { 
        return (
            <div>
               <button onClick={this.back}>返回首页</button>
            </div>
        );
    }
}
export default withRouter(BackHome);
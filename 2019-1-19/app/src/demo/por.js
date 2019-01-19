import React, { Component } from 'react';
class Por extends Component {
    off = () => {
        this.props.off();
        this.props.history.push('/');
    }
    render() { 
        return (
            <div>
                私有的内容
                <button onClick={this.off}>退出</button>
            </div>
        );
    }
}
 
export default Por;
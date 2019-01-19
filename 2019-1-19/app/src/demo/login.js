import React, { Component } from 'react';
class Login extends Component {
    click = () => {
        this.props.on();
        this.props.history.push('/por');
    }
    render() { 
        console.log(this.props);
        return (
            <div>
                <button 
                    onClick={this.click}
                >登录</button>
            </div>
        );
    }
}
 
export default Login;
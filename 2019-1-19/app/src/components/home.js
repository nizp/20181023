import React, { Component } from 'react'
class Home extends Component {

    componentDidMount(){
        console.log('home挂载');
    }
    componentWillUnmount(){
        console.log('home卸载');
    }

    render() { 
        console.log(this.props);
        return (
            <div>
                HOME
            </div>
        );
    }
}
 
export default Home;
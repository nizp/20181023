import React, { Component } from 'react'
import PPa from './ppa';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:'1'
        }
    }
    render() { 
        return (
            <div>
                <div>父级</div>
                <hr />
                <PPa num={this.state.num}/>
            </div>

        );
    }
}
export default App;
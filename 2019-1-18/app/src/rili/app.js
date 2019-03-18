import React, { Component } from 'react';
import './1.css';
import Mhead from './head';
import List from './list';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div id="box">
                <Mhead />
                <div className="nav">
                    <div>2019年1月</div>
                    <div>
                        <span>↑</span>
                        <span>↓</span>
                    </div>
                </div>
                <List />
            </div>
        );
    }
}
 
export default App;
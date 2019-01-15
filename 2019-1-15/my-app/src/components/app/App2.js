import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    /*
        改变数据状态使用this.setState()
    */
    this.state = {
      val:'1234'
    };  

    // this.change = this.change.bind(this);
  }
  change = (ev) => {
    // console.log(ev.target.value);
    // this.state.val = 1;
    this.setState({val:ev.target.value});
    // this.setState((state)=>{
    //   return {val:state.val + '1'};
    // })
  }
  render() {
    let {val} = this.state;
    
    return (
      <div className="App">
        <input 
          value={val}
          onChange={this.change}
        />
        {val}
      </div>
    );
  }
}

export default App;

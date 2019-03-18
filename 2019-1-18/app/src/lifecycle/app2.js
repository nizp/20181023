import React, { Component } from 'react';

class PPa extends Component {
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,this.props);
        if(nextProps.num !== this.props.num){
            return true;
        }
        return false;     
    }
    render() { 
        console.log('子级更新了');
        return ( 
            <div>ppa {this.props.num} </div>
        );
    }
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            num:0,
            val:''
        }
    }
    change = (ev) => {
        let {value:val} = ev.target;
        this.setState({val});
    } 
    click = () => {
        let {num} = this.state;
        num++;
        // this.setState((prevState, props)=> ({
        //     num:++ prevState.num 
        // }) );
        this.setState({num});
        // num ++
        // num ++
        // this.setState({num});
        // num ++
        // this.setState({num});
        // num ++
        // this.setState({num});  

        //如果有多个setState就直接执行最后一个.


    }
    render() { 
        console.log(this.state);
        let {val,num} = this.state;
        return (
            <div>
                <input 
                    value={val}
                    onChange={this.change}
                />
                <button
                    onClick={this.click}
                >{this.state.num}</button>
                <hr />
                <PPa num={num} /> 
            </div>
        )
    }
}
 
export default App;
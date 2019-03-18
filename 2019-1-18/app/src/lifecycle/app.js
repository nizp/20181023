import React, { Component } from 'react';

class PPa extends Component {
    componentWillReceiveProps(){
        console.log('ppa中的父级num发生变化了');
    }
    componentDidUpdate(){
        console.log('ppa的Did');
    }
    render() { 
        return ( 
            <div>ppa {this.props.num} </div>
        );
    }
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            num:0
        }
        console.log('constructor',1);
    }
    componentWillMount(){
        // this.setState({num:1});
        console.log('componentWillMount',2);
    }
    componentDidMount(){
        // this.setState({num:1});
        console.log('componentDidMount',4);
    }
    shouldComponentUpdate(nextProps, nextState){
        //默认返回true（不写这个钩子函数），只有是true的情况下，下面三个钩子函数才会执行
        //如果写了shouldComponentUpdate就一定要有返回值
        /*
            componentWillUpdate
            render 
            componentDidUpdate 


            nextProps  下一次父级的数据
            nextState  下一次自己的状态


            这一次自己的状态   this.state.num = 0
            下一次自己的状态   nextState.num = 1
        */
        console.log('shouldComponentUpdate');
      
        console.log('下次:'+ nextState.num);
        console.log('这次:'+ this.state.num);


        /*
            10  9
                1
        */
        
        return nextState.num !== this.state.num;
    }
    componentWillReceiveProps(){ //父级数据变化才执行。
        console.log('componentWillReceiveProps');
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    click = () => {
        // this.setState((prev)=>{
        //     return {num:++prev.num}
        // });
        let {num} = this.state;
        num++;
        this.setState({num});
    }
    render() { 
        console.log('render',3);
        return (
            <div>
                <button
                    onClick={this.click}
                >{this.state.num}</button>
                <hr />
                <PPa num={this.state.num} /> 
            </div>
        )
    }
}
 
export default App;
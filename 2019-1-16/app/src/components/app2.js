import React,{Component} from 'react';

class PPa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }
    render() { 
        let {pn} = this.props;  //父组件的数据
        let {num} = this.state; //本身组件的数据

        return (
            <div>
                <button 
                    onClick={this.click}
                >子级的{num}</button>
                父级的 {pn}
            </div>
        );
    }
    click = () => {
        let {num} = this.state;
        let {fn} = this.props;
        this.setState({num:++num});
        fn();
    }
}
 

class App extends Component {
    constructor() {
        super();
        this.state = {
            parentn:10
        }
    }
    changeNum = () =>{
        let {parentn} = this.state;
        parentn += 2;
        this.setState({parentn});
    }
   
    render() { 
        return (  
            <div>
                <h1>app</h1>
                <button
                    onClick={this.changeNum}
                >父级的{this.state.parentn}</button>
                <hr />
                <PPa {...{
                    pn:this.state.parentn,
                    //n="parentn" p['n']
                    fn:this.changeNum
                }}/>
            </div>
        );
    }
    
}
 
export default App;
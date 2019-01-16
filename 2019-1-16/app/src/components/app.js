import React from 'react';
import PPa from './ppa';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pn:10
        }
    }
    changePn = ()=>{
        let {pn} = this.state;
        pn++;
        this.setState({pn});
    }
    render() { 
        let {pn} = this.state;
        return (
            <div>
                <h1>父级</h1>
                <button 
                    onClick={this.changePn}
                >按钮{pn}</button>
                <hr />
                <PPa 
                    pn={pn} 
                    fn={this.changePn}
                />
            </div>
        );
    }
}
 
export default App;
import React from 'react';
class PPa extends React.Component {
    constructor(props) {
        super(props);
        //把父级的数据，变成了自己的状态
        this.state = {
            num:props.pn
        }
        console.log('constructor');
        /* 
            props:['pn'],
            data(){
                return {
                    num:this.pn
                }
            }
        */
    }
    render() { 
        let {num} = this.state;
        return (
            <div>
                <h1>子级</h1>
                <button onClick={this.click}>按钮{num}</button>
            </div>
        );
    }
    click = () => {
       let {num} = this.state;
       num ++;
       this.setState({num});
    }
}
 
export default PPa;
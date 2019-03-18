import React, { Component } from 'react';
class myH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:0,
            time2:0
        }
        this.timer = null;
    }
    componentDidMount(){
        let t = () => {
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            let s = d.getSeconds();
            let time = this.toDou(h) + ':' + this.toDou(m) + ':' + this.toDou(s);
            // this.refs.h5.innerHTML = time;
            // console.log(this.refs.h5)
            this.setState({time});
        }
        t();
        this.timer = setInterval(t, 1000);  

        let d = new Date();
        let time2 = d.getFullYear() + '年' + (d.getMonth()+1) + '月';
        this.setState({time2});


        
        
    }

    toDou(n){
        return n<10?'0'+n:''+n;
    }
    
    render() { 
        console.log(1);
        let {time,time2} = this.state;
        return ( 
            <header>
                <div className="header_content">
                    <h5 ref="h5">{time}</h5>
                    <p>{time2}</p>
                </div>
            </header>
        );
    }
}
 
export default myH;
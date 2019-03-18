import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d:0,
            m:0
        }
    }
    componentDidMount() {
        //为了拿到一个月有多少天
        let d = new Date();
        d.setMonth(d.getMonth()+1);
        d.setDate(0);
        // console.log(d.getDate());

        //为了拿到一个月的第一天是周几
        let d2 = new Date;
        d2.setDate(1);

        this.setState({
            d:d.getDate(),
            m:d2.getDay()
        });
    }
    render() { 
        let {d,m} = this.state;
        let list = [];
        for(let i=1;i<=d;i++){
            list.push(<li>{i}</li>);
        }

        // console.log(m)
        if(m===0)m=7;
        for(let i=1;i<=7;i++){
            if(i !== m){
                list.unshift(<li></li>);
            }else{
                break;
            }
        }
        

        return ( 
            <div className="rl">
                <div className="rl_top">
                    <ul>
                        <li>一</li>
                        <li>二</li>
                        <li>三</li>
                        <li>四</li>
                        <li>五</li>
                        <li>六</li>
                        <li>日</li>
                    </ul>
                </div>
                <div className="rl_conent">
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default List;
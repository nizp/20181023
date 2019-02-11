import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css';
class Home extends Component {
    constructor(params) {
        super();
        this.state = {
            arr:[],
            num:1,
            zp:'sh'
        }
    }
    componentDidMount() {
        let {location:{query}} = this.props;
        if(query){
            this.setState({
                zp:query.zp
            },()=>{
                this.getData();
            })
        }else{
            this.getData();
        }
        
    }

    getData = async () => {
        let {num,zp} = this.state;
        let data = await fetch('http://localhost:80/getdata?zp='+ zp +'&num='+num)
        let d = await data.json();
        console.log(d);
        if(d.code === 0){
            this.setState({arr:d.data});
        }
    }

    gosh = () => {
        this.setState({zp:'sh'},()=>{
            this.getData();
        });
    }

    goxy = () => {
        this.setState({zp:'xy'},()=>{
            this.getData();
        });
    }

    render() { 

        let {arr,num,zp} = this.state;
        console.log(this.props);
        let list = arr.map((e,i)=>{
            return (
                <li key={i}>
                    <span className="num">0{1+(num-1)*4+i}</span>
                    <div className="list">
                        <a href="">
                            <span className="job">职位需求：{e.zw}</span>
                            <span>需求人数：{e.rs}名</span>
                            <time>{e.sj.join('-')}</time></a>
                        <p>
                            <span className="text">
                                {e.info[0].l}
                            </span>
                            <Link to={{pathname:'/content',query:{
                                zp,
                                num,
                                i,
                                data:e
                            }}}>查看详情</Link>
                        </p>
                            {/* <a href="javascript:;">查看详情>></a></p> */}
                    </div>
                </li>
            )
        })

        return (
            <div id="content">
                <ul id="leftList">
                    <li 
                        className={zp === 'sh'?'active':''}
                        onClick={this.gosh}
                    ><span>社会招聘</span>society</li>
                    <li 
                        className={zp === 'xy'?'active':''}
                        onClick={this.goxy}
                    ><span>校园招聘</span>campus</li>
                </ul>
                <div id="right">
                    <ul id="rightList">					
                        {list}
                    </ul>
                    <nav id="nav">
                        <a className="active" href="javascript:;">1</a>
                    </nav>
                </div>
            </div>
        );
    }
}
 
export default Home;
/*
    需求:
        点击收藏，跳转收藏页（列表）
        点击添加，到购物车
*/
import React, { Component } from 'react';
import routes from './routers/routers';
import {Link,withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './assets/baidu.css';
import * as actioncreators from './actioncreators/actioncreate';

class App extends Component {
    constructor() {
        super();
        this.all = false;  //给类加上一个属性 {all:false}
    }
    changeAll = () => {
        this.all = !this.all;
        let {location:{pathname},checkedAll} = this.props;
        checkedAll(this.all,pathname);
    }
    dele = () => {
        let {dele,dele2,location:{pathname}} = this.props;
        if(pathname === '/'){
            dele2();
        }else if(pathname==='/collection'){
            dele();
        }
    }
    render() { 
        // console.log(routes);
        let {location:{pathname},r1,r2,increment,decrement} = this.props;
        let route = '';
        if(pathname === '/'){
            route = 'arr';
        }else if(pathname === '/collection'){
            route = 'arr2';
        }else{
            route = 'arr';
        }
        this.all = r1[route].length?r1[route].every(e=>e.checked):false;
        
        let gocartList = r2.arr.map((ele,i)=>{
            return (
                <li key={i}>
                    <button
                        onClick={()=>{decrement(ele.id)}}
                    > - </button>
                    <span>{ele.name}</span>
                    <button
                        onClick={()=>{increment(ele.id)}}
                    > + </button>
                    <span>{ele.num}</span>
                </li>
            )
        });

        return (
            <div>
                <div className="wrap">
                <div id="gwcart">
                        <ul id="gwul">
                            {gocartList}
                        </ul>
                        <div>
                            <p>总计:￥{r2.total.toFixed(2)}元</p> 
                            <p>数量:{r2.sum}</p>
                        </div>
                    </div>
                    <div className="baidu">
                       {routes}
                        <div className="select">
                            <span 
                                className="selectAll"
                                onClick={this.changeAll}
                            >{this.all?'✔':''}<span>全选</span></span>
                            <div className="others">
                                <Link to="/"><span><em></em>首页</span></Link>
                                <Link to="/collection"><span><em></em>收藏</span></Link>
                                <Link to="/addto"><span><em></em>添加</span></Link>
                                <span 
                                    onClick={this.dele}
                                ><em></em>删除</span>
                            </div>
                        </div>
                    </div>
		        </div>
            </div>
        );
    }
}
/*
    如果使用了connect，路由跳转会失效，此时，使用withRouter解决。
*/
export default withRouter(connect(state=>{
    console.log(state);
    return {
        r1:state.reducer,
        r2:state.gocart
    }
},(dispatch)=>bindActionCreators(actioncreators,dispatch))(App));


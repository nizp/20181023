/*
    需求:
        点击收藏，跳转收藏页（列表）

        点击添加，到购物车
*/
import React, { Component } from 'react';
import routes from '../routers/routers';
import {Link,withRouter} from 'react-router-dom';
import './baidu.css';
// import List from '../components/list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actioncreators from './actioncreators/actioncreate';

class App extends Component {
    constructor() {
        super();
        this.all = false;  //给类加上一个属性 {all:false}
    }
    changeAll = () => {
        this.all = !this.all;
        let {location:{pathname},checkedAll} = this.props;
        if(pathname === '/'){
            checkedAll(this.all,'arr');
        }
        if(pathname === '/collection'){
            checkedAll(this.all,'arr2');
        }
        console.log(this.props);
    }
    dele = () => {
        let {location:{pathname},dele} = this.props;
        if(pathname === '/'){
            dele('arr');
        }
        if(pathname === '/collection'){
            dele('arr2');
        }
        // this.props.dele();
    }
    render() { 
        let {location:{pathname}} = this.props;
        // console.log(routes);
        if(pathname === '/'){
            this.all = this.props.arr.every(e=>e.checked);
        }   
        if(pathname === '/collection'){
            this.all = this.props.arr2.every(e=>e.checked);
        }
        
        return (
            <div>
                <div className="wrap">
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
export default withRouter(connect(state=>state,(dispatch)=>bindActionCreators(actioncreators,dispatch))(App));


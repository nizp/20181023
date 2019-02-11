import React, { Component } from 'react';
import './aboute.css';
class Aboute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        };
    }
    go = () => {
        let {history,location:{query}} = this.props;
        history.push({
            pathname:'/',
            query
        })
    }
   
    render() { 
        let {location:{query:{data}}} = this.props;

        console.log(data);
        return (
            <div className="content">
                <div id="rightTop">
                    <a 
                        id="a" 
                        className="goback"
                        onClick={this.go}
                    >&lt;&nbsp;返回招聘列表</a>
                    <a href="javascript:;">投个简历</a>
                </div>
                <div id="title">
                    <p>{data.zw}</p>
                    <div className="simple">{data.dy}<span>/</span>北京<span>/</span>经验3-5年<span>/</span>本科及以上<span>/</span>2名 <time>2014-04-10</time></div>
                </div>
                <div id="bottom">
                    <dl>
                        <dt>岗位要求：</dt>
                        <dd>1.  熟练使用JavaScript/CSS/HTML，熟悉HTML5 / CSS3；</dd>
                        <dd>2.  熟悉JavaScript的核心技术，包括并不限于AJAX、DOM、BOM、JSON等；</dd>
                        <dd>3.  熟悉ES5 / ES6规范，并且有实践经验；</dd>
                        <dd>4.  熟悉Web标准，能够开发通用的Web组件，对HTML语义化有深刻理解；</dd>
                        <dd>5.  熟悉前端模块化开发方案，对前端工程化有深刻理解，熟悉任一一种前端构建工具，包括Webpack、Grunt、Gulp等；</dd>
                        <dd>6.  有前端性能优化经验，包括语言层面和架构层面；</dd>
                        <dd>7.  对前后端分离有深入的理解和具体的实践；</dd>
                        <dd>8.  了解任一一种流行的前端框架，包括但不限于React、Vue、Angular等；</dd>
                    </dl>
                </div>
		    </div>
        );
    }
}
 
export default Aboute;
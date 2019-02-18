import React, { Component } from 'react';
import { Link ,withRouter,Route} from 'react-router-dom'
import './app.less';
//https://www.cnblogs.com/zhourongcode/p/10104366.html
//http-proxy-middleware 去做跨域
import Home from '../home/Home';

// fetch('/api?json=true')
// .then(e=>e.json())
// .then(e=>{
//   console.log(e.data,1,2,3);
// })

import Routers from '../../routers/routers';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onoff:false
    };
  }
  changeonOff = () => {
    let {onoff} = this.state;
    this.setState({
      onoff:!onoff
    })
  }
  render() {
    let {location:{pathname}} = this.props;
    let {onoff} = this.state;
    // console.log(this.props.pathname)
    return (
      <div className="App">
        <header>
            <h1>
                酷狗音乐
                <img src={require('../../images/logo.png')} alt="酷狗音乐" />
            </h1>
            <div 
              className="search"
              onTouchStart={this.changeonOff}
            >
                <img src={require("../../images/search.png")} alt="" />
            </div>  
        </header>
        <nav>
            <ul className="nav">
                <li className={pathname==='/'?"active":''}>
                {/* <li className={"active"}> */}
                    <Link to="/">
                        新歌
                    </Link>
                </li>
                <li  className={pathname==='/rank'?"active":''}>
                    <Link to="/rank">
                        排行
                    </Link>
                </li>
                <li  className={pathname==='/plist'?"active":''}>
                    <Link to="/plist">
                        歌单
                    </Link>
                </li>
                <li className={pathname==='/singer'?"active":''}>
                    <Link to="/singer" >
                        歌手
                    </Link>
                </li>
            </ul>
        </nav>
        <footer className={onoff?"play on":"play off"}>
          <img className="m_icon" src="http://singerimg.kugou.com/uploadpic/softhead/200/20181228/20181228194406627.jpg"/>
          <div className="m_name">
            <p>单身</p>
            <p>黄子韬</p>
          </div>
          <div className="play_ioc">
            <img src={require("../../images/search.png")} alt="" />
            <img src={require("../../images/search.png")} alt="" />
            <img src={require("../../images/search.png")} alt="" />
          </div>
        </footer>
        <Routers />
      </div>
    );
  }
}

export default withRouter(App);

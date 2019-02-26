import React, { Component } from 'react';
import { Link ,withRouter,Route} from 'react-router-dom';
import {bindActionCreators,connect,actions} from '../../store/createredux';
import './app.less';
import axios from 'axios';
//https://www.cnblogs.com/zhourongcode/p/10104366.html
//http-proxy-middleware 去做跨域
import Routers from '../../routers/routers';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playonoff:false, //需要关闭
      lyric:false,//一开始不显示歌词
      lyricArr:[],
      currentTime:0
    };
  }
  playFn = () =>{
    let {playonoff} = this.state;
    // console.log(1)
    playonoff = !playonoff;
    if(playonoff){
      this.refs.audio.pause(); //暂停
    }else{
      this.refs.audio.play();//播放 
    }
    this.setState({
      playonoff
    })
  }

  //下一首歌
  nextSong = () => {
    let {data:{data},onesong,getplay} = this.props;
    
    let index = data.findIndex(e=>e.album_audio_id===onesong.album_audio_id)
    // 当前index不是最后一个，就++
    if(index !== data.length-1){
      getplay(data[++index].hash);
    }
  }
  getlyric = async () => {
    let {onesong:{fileName,hash,timeLength}} = this.props;
    console.log(this.props);
    let data = await axios.get('/lyric?cmd=100&keyword='+fileName+'&hash='+hash+'&timelength='+(timeLength+'000'))
    let arr = data.data.match(/[^\n]+\n/g)
    console.log(arr);
    this.setState({lyric:true,lyricArr:arr})
  }
  render() {
    /*
      在暂停的情况下点击另外的歌，
      让暂停变为播放图标

      当点击li的时候，设置一个状态，过几秒设置到初始值
      监听播放器暂停

      歌词:
      http://m.kugou.com/app/i/krc.php
      ?cmd=100&keyword=儿童歌曲-闹元宵&
      hash=A14A549407B6350941C51307F886BB16
      &timelength=timelength+000&d=0.7499095592359131
    */
    let {location:{pathname},onoff,onesong:data,history} = this.props;
    let {playonoff,lyric,lyricArr,currentTime} = this.state;
    let ponoff = null;
    let lyricList = null;
   
    if(playonoff){  
      ponoff = require('../../images/play_icon.png') 
    }else{
      ponoff = require('../../images/pause_icon.png')
    }

    if(lyricArr){
      /*

      */
      lyricList = lyricArr.map((e,i)=>{
        let lyricolor = false;
        let [time,lyric] = e.split(']');
        let [,$1,$2,$3] = time.match(/\[(\d{2})\D(\d{2})\.(\d{2})/)
        //time => '[00:00.16'
          // if(currentTime == (60000*$1 + $2*1000 + $3*1)){
          //   lyricolor = true;
          // }
          // console.log(lyricolor);
          // console.log('播放的'+currentTime,'计算后的:'+(60000*$1 + $2*1000 + $3*1));
          // console.log(60000*$1 + $2*1000 + $3*1); //把数据中的时间转成了毫秒

          
        return (<p className={lyricolor?'lyricolor':''} key={i}>{lyric}</p>)
      })
    }

    // console.log(this.props);
    return (
      <div className="App">
        <header>
            <h1>
                酷狗音乐
                <img src={require('../../images/logo.png')} alt="酷狗音乐" />
            </h1>
            <div 
              className="search"
              onClick={()=>{history.push('/search')}}
            >
                <img src={require("../../images/search.png")} alt="" />
            </div>  
        </header>
        <nav style={{display:pathname==='/search'?'none':'block'}}>
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
        
        <div 
          id="mask_box" 
          className={lyric?'active':''} 
          ref="mask"
          
        >
          <div className="mask"></div>
          <img src={data.imgUrl && data.imgUrl.replace('{size}','200')} className="mask_pic"/>
        </div>
        <div 
          className={lyric?'lyric lyricshow':'lyric'}
          onClick={()=>{this.setState({lyric:false})}}
        >
          <img src={data.imgUrl && data.imgUrl.replace('{size}','200')} />
          <div className="lyricList">
            <div>
              {lyricList}
            </div>
          </div>
        </div>

        <footer className={onoff?"play on":"play off"}>
          <audio 
            src={data.url} 
            autoPlay
            ref="audio"
            onPause={()=>{this.setState({playonoff:true})}}
            onPlay={()=>{
              this.setState({playonoff:false})
            }}
            onTimeUpdate={()=>{ //当音乐播放的时候触发的事件
              // console.log(this.refs.audio.currentTime);
              this.setState({currentTime:this.refs.audio.currentTime})
            }}
          />
          <img 
            className="m_icon" 
            src={data.imgUrl && data.imgUrl.replace('{size}','200')}
            onClick={this.getlyric}
          />
          <div className="m_name">
            <p>{data.songName}</p>
            <p>{data.singerName}</p>
          </div>
          <div className="play_ioc">
            <img 
              src={ponoff} 
              alt="" 
              onClick={this.playFn}
            />
            <img 
              src={require("../../images/play_next.png")} 
              alt="" 
              onClick={this.nextSong}
            />
            <img src={require("../../images/search.png")} alt="" />
          </div>
        </footer>
        <Routers />
      </div>
    );
  }
}

export default withRouter(connect(
  state=>state,
  (dispatch)=>{
    return bindActionCreators(actions,dispatch) 
  }
)(App));


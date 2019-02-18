import React, { Component } from 'react';
import axios from 'axios';
import './index.less';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iw:0,
      arr:[], //banner的数组
      disX:0, //正在改变的距离
      o:false,
      data:[]
    };
    this.startX = 0; //按下的X轴
    this.offsetL = 0;//ul实际位置

  }
 async componentDidMount(){
    let data = await axios.get('/api?json=true');
    let {data:{data:d,banner}} = data;

    let arr = [...banner,...banner];
    this.setState({
      iw:this.refs.banner.offsetWidth,
      arr,
      data:d
    });
  }
  start = (ev) => {
    let {iw,disX,arr} = this.state;
    let {pageX:x} = ev.changedTouches[0];
    //拿到按下的距离
    this.startX = x;
    //通过ul的距离反推出当前在第几页
    let now = Math.abs(Math.round(disX/iw));
    //如果当前在第0页，就快速移动到第二组的第一张
    if(now === 0){
      this.offsetL = - (arr.length/2)*iw;
      this.setState({
        disX: this.offsetL 
      });
    }else if(now === arr.length - 1){ //最后一张
      this.offsetL = - (arr.length/2-1)*iw
      this.setState({
        disX:this.offsetL
      });
    }else{
      this.offsetL = - now * iw;
    }
    //按下的时候取消动画
    this.setState({
      o:false
    });
    // console.log(this.offsetL)
  }
  move = (ev) => {
    let {pageX:x} = ev.changedTouches[0];
    /*
        ul实际的位置 + 移动的距离 = 现在ul的位置
    */ 
    this.setState({
      disX:this.offsetL + (x - this.startX)
    })
  }
  end = (ev) => {
    let {iw,disX} = this.state;
    let now = Math.abs(Math.round(disX/iw)); //当前为多少页
    // console.log(now)
    this.offsetL = - (now * iw);
    this.setState({
      disX:this.offsetL,
      o:true
    });

  }
  render() {
    let {arr,iw,disX,o,data} = this.state;
    let len = arr.length;
    let ulW = len * iw;
    let bannerlist = null;
    let list = null;
    if(arr.length){
      bannerlist = arr.map((item,i)=>{
        return  (<li key={i}><img src={item.imgurl}/></li>)
      });
      list = data.map((item,i)=>{
        return (
          <li key={i}>
            <p>{item.filename}</p>
            <img src={require("../../images/upload.png")} />
          </li>
        )
      })
    }

    console.log(data)

    return (
          <section id="warp">
          <main className="body_box">
              <section className="body">
                  <div className="banner" ref="banner">
                      <ul 
                        style={{
                          width:ulW,
                          transform:'translateX('+disX+'px)',
                          transition:o?'.5s':'none'
                        }}
                        onTouchStart={this.start}
                        onTouchMove={this.move}
                        onTouchEnd={this.end}
                      >
                         {bannerlist}
                      </ul>
                  </div>
                  <div className="list">
                      <ul>{list}</ul>
                  </div>
              </section>
          </main>
        </section>
    );
  }
}

export default Home;

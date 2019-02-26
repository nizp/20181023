import React, { Component } from 'react';
import {bindActionCreators,connect,actions} from '../../store/createredux';
import './rankinfo.less';
class RankInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
      
      let {location:{search},addData} = this.props;
      let [,id] = search.split('='); 
      addData('/rankinfo?rankid='+id);
        // console.log(this.props);
    }
    
    render() { 
        let {data:{rankbanner,rankdata},getplay,history} = this.props;
        let rankinfoList = null;
        
        if(rankbanner){    
            rankinfoList = rankdata.map((e,i)=>{
                let cname = '';
                switch (i) {
                    case 0:
                        cname = 'one';
                        break;
                    case 1:
                        cname = 'two';
                        break;
                    case 2:
                        cname = 'three';
                        break;
                    default:
                        cname = '';
                        break;
                }
                return (
                    <li 
                        key={i} 
                        onClick={()=>{getplay(e.hash)}}
                    >
                        <span className={cname}>{i+1}</span>
                        <p>{e.filename}</p>
                        <img src={require("../../images/upload.png")} />
                    </li>
                )
            })
        }
        return (
            <section id="rankinfo">
                <div className="infoBanner">
                    <div className="title">
                        <img 
                            src={require('../../images/goback_icon.png')} 
                            className="goback"
                            onClick={()=>{history.go(-1)}}
                        />
                        <h6>{rankbanner && rankbanner.rankname}</h6>
                    </div>
                    <img className="bg" src={rankbanner && rankbanner.imgurl.replace('{size}','400')}/>
                    <div className="info-time">
                        <p>上次更新时间：{rankbanner && rankbanner.update_frequency}</p>
                    </div>
                </div>
                <div className="list">
                    <ul>{rankinfoList}</ul>
                  </div>
            </section>
        );
    }
}
 
export default connect(
    state=>state,
    (dispatch)=>{
      return bindActionCreators(actions,dispatch) 
    }
  )(RankInfo)
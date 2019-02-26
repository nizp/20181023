import React, { Component } from 'react';
import './rank.less';
import { Link} from 'react-router-dom';
class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }
  componentDidMount() {
    fetch('/getrank')
    .then((e)=>e.json())
    .then((e)=>{
      this.setState({list:e.rank.list});
    })
    
  }
  render() {
    let {list} = this.state;
    let rankList = null;
    if(list.length){
      rankList = list.map((e,i)=>{
        return (
          <li key={i}>
              <Link to={{
                pathname: '/rankinfo',
                search: '?id='+e.rankid
              }}>
                <img className="pic" src={e.imgurl.replace('{size}','400')} />
                <h5>{e.rankname}</h5>
                <img className="icon" src={require('../../images/arrow_icon.png')}/> 
              </Link>
          </li>
        )
      })
    }
    return (
      <div>
        <div className="rank_list">
              <ul>
                {rankList}
              </ul>
          </div>
      </div>
    );
  }
}

export default Rank;

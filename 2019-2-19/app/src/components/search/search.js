import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import './search.less';
import {bindActionCreators,connect,actions} from '../../store/createredux';
import fetchJSONP from '../../fetch';

import { Button,NavBar, Icon,SearchBar,List,Item} from 'antd-mobile';
// console.log(Button,1)
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            show:true,
            searchList2:[]
        };
    }
    componentDidMount() {
        fetchJSONP({
            url:'http://mobilecdn.kugou.com/api/v3/search/hot',
            data:{
                format:'jsonp',
                plat:'0',
                count:30
            }
        })
        .then((res)=>{
            this.setState({
                list:res.data.info
            })
            console.log(res);
        })
    }
    searchFn = async (text) => {
        // console.log(ev)
        let data = await fetchJSONP({
            url:'http://mobilecdn.kugou.com/api/v3/search/song',
            data:{
                format:'jsonp',
                keyword:text,
                page:1,
                pagesize:30,
                showtype:1
            }
        });
        // console.log()
        this.setState({searchList2:data.data.info,show:false})
        // console.log(data.info)
    }
    render() {
        let {list,show,searchList2} = this.state;
        let searchList = null;
        // console.log(list);
        if(show){
            searchList = list.map((e,i)=>{
                return (
                    <List className="my-list" key={i}>
                        <List.Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {window.open(e.jumpurl)}}
                            platform="android"
                        >{e.keyword}</List.Item>
                    </List>
                )
            })
        }else{
            console.log(searchList2)
            searchList = searchList2.map((e,i)=>{
                return (
                    <List className="my-list" key={i}>
                        <List.Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => {this.props.getplay(e.hash)}}
                            platform="android"
                        >{e.filename}</List.Item>
                    </List>
                )
            })
        }
    
        return (
        <div id="search">
                <div className="nav">
                    <NavBar
                        mode="light"
                        icon={<Icon 
                            type="left"
                            size="lg" 
                            color="#999"
                        />}
                        fontSize={'1rem'}
                        onLeftClick={() => console.log('onLeftClick')}
                    >搜索</NavBar>    
                </div>

                <div className="sbar">
                    <SearchBar 
                        placeholder="歌手/歌名" 
                        maxLength={8} 
                        onSubmit={this.searchFn}
                    />
                </div>

                <div className="searchList">
                   {searchList}
                </div>
        </div>
        );
    }
}


export default connect(
    state=>state,
    (dispatch)=>{
      return bindActionCreators(actions,dispatch) 
    }
  )(Search)

// export default Search;

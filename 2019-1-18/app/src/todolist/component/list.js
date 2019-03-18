import React, { Component } from 'react'
import ListChildren from './listchildren'; //li
class List extends Component {
    render() { 
        /*
            filterArr:过滤之后的arr
            toggleFn:父级切换的函数
            rmData:父级删除数据的函数
        */
        let {filterArr:arr,toggleFn,rmData,changeVal} = this.props;
        // console.log(arr)
        //[<li></li>]
        //把数据变成li组件,每个li组件中都分别传入了内容:val,是否选中:checked,id...

        let listView = arr.map((el,i)=>{
            return <ListChildren {...{
                val:el.txt,
                key:i,
                checked:el.checked,
                id:el.id,
                toggleFn,
                rmData,
                changeVal
            }}/>
        });
        return ( 
            <ul className="todo-list">
                {listView}
            </ul>
        );
    }
}
 
export default List;

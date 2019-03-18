import React,{ Component } from 'react';
class MyHeader extends Component {
    keyup = (ev) => {
        //回车之后，添加数据
        if(ev.keyCode === 13){
            //给父级添加数据
            let {value} = ev.target;
            let {addfn} = this.props; //接收父级传进来的添加的方法
            if(value){
                //添加新的数据
                addfn({
                    id:Date.now(),
                    txt:value,
                    checked:false
                });
                ev.target.value = '';
            }else{
                alert('请输入内容');
            }
        }
    }
    render() { 
        return ( 
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容"
                    onKeyUp={this.keyup}
                />
            </header>
        );
    }
}
 
export default MyHeader;
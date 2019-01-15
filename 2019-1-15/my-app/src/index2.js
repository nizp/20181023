import React from 'react'; //主要库
import ReactDOM from 'react-dom'; //把jsx转成能够让浏览器识别的工具

import './App.css';
//挂载组件。（根节点的挂载）
/*
    *** ReactDOM.render()是个方法
    三个参数:
        第一个参数:
            模板、组件
        第二个参数:
            挂载的根节点
        第三个参数:
            挂载完成之后触发的回调函数

        {

        }

        
*/
if(module.hot){
    module.hot.accept();
}

/*
    <div>
        <div></div>
        <ppa />
    </div>
*/

ReactDOM.render(
    <div>
        <div className="active">你好世界!</div>
        {/*[1,2,3,4,5] */}
        {/* <input type="text" /> */}
        {
            // function fn(){
            //     alert(5);
            // }
        }
        <div style={{width:'200px',height:200,background:'red'}}></div>

        <input 
            value="1"
            onChange={(ev)=>{console.log(ev.target.value)}}
        />


    </div>
    ,
    document.getElementById('root'),
    ()=>{
        console.log('挂载成功');
    }
);



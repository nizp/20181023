import React from 'react';
import './css/index.css';
import MyHeader from './component/header';
import List from './component/list';
import MyFooter from './component/footer';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arr:[
                {
                    id:0,
                    checked:false,
                    txt:'好好好'
                },
                {
                    id:1,
                    checked:true,
                    txt:'棒棒棒'
                }
            ],
            active:'/all'
        }
    }

    changeActive = (active) => {
        this.setState({active});
    }
    addData = (data) => {
        let {arr} = this.state;
        arr.unshift(data);
        this.setState({arr});
    }
    rmData = (id) => {
        let {arr} = this.state;
        arr = arr.filter(e=>e.id !== id);
        this.setState({arr});
    }
    toggleFn = (id) => {
        let {arr} = this.state;
        arr.forEach(d=>{
            if(d.id === id){
                d.checked = !d.checked;
            }
        });
        this.setState({arr});
    }
    changeVal = (id,val) => {
        let {arr} = this.state;
        arr.forEach(item=> {
            if(item.id === id){
                item.txt = val;
            }
        });
        this.setState({arr});
    }
    allFn = (ev) => {
        let {checked} = ev.target;
        let {arr} = this.state;
        arr.forEach(e=>e.checked = checked);
        this.setState({arr});
    }

    render() { 
        //只要当前组件的状态发生变化，那么变化之后还会进一次render

        let {arr,active} = this.state;
        //计算footer未选中
        let len = arr.filter(e=>!e.checked).length;
        //计算是否全选
        let checkAll = (arr.length && arr.every(e=>e.checked)) || false;
        //footer的显示隐藏
        let footer = null;
        if(arr.length) footer = (<MyFooter
                len={len} 
                changeActive={this.changeActive}
            />);
        
        //每次数据发生变化都会过滤一下arr
        let filterArr = arr.filter(e=>{
            switch (active) {
                case '/all':
                    return e;
                case '/unchecked':
                    return !e.checked;
                case '/checked':
                    return e.checked;
                default:
                    return e;
            }
        });

        console.log(active);

        return (
            <section className="todoapp">
                <div>
                    <MyHeader 
                        addfn={this.addData}
                    />
                    <section className="main">
                        <input
                            className="toggle-all" 
                            type="checkbox" 
                            checked={checkAll}
                            onChange={this.allFn}
                        />
                        <List 
                            {...{
                                filterArr,
                                toggleFn:this.toggleFn,
                                rmData:this.rmData,
                                changeVal:this.changeVal
                            }}
                        />
                    </section>
                   {footer}
                </div>
            </section>
        );
    }
}
 
export default App;

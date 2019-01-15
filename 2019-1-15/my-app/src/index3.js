import React,{Component} from 'react';
import ReactDOM from 'react-dom';


if(module.hot){
    module.hot.accept();
}

//一定要注意类的首字母要大写。
//组件在挂在的时候，会先执行constructor，只会执行一次，然后经过几个钩子函数之后，走到render
//只要数据发生变化，就再次执行render，而constructor是不会改变的
class App extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render(){
        let {aaa,bbb} = this.props;
        // console.log(this.props)
        
        return (
            <div>
                <h1>组件</h1>
                <div>{aaa}{bbb}</div>
            </div>
        )
    }
}
function PPa (props){
    return (
        <div>我是ppa</div>
    )
}

/*
    属性中如果有2个重复的，后面会把前面覆盖

    ...[1,2,3]
    {...{a:1,b:2}}  推荐
*/
let obj = {
    aaa:'hello',
    bbb:'world',
    ccc:[1,2,3,4]
}
ReactDOM.render(
    <div>
        {/* <App aaa="你好" bbb="世界" ccc={[1,2,3,4]} {...{
            aaa:'hello',
            bbb:'world',
            ccc:[1,2,3,4]
        }}/> */}
        <App  {...obj}/>
        <PPa />
    </div>,
    document.getElementById('root')
);

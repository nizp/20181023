import React,{Component} from 'react';
import ReactDOM from 'react-dom';

if(module.hot){
    module.hot.accept();
}
let Li = (props) => (<li>{props.val}</li>); //声明了一个Li的组件

class App extends Component {
    render(){
        /*
            普通的render中的return 上面写逻辑，return下面是UI
        */
        let {arr:ary} = this.props;
        let arr = ary.map((ele,i)=><Li {...{
            val:ele,
            key:i
        }}/>);

        console.log(arr);
        return (
            <div>
                <span>app的app</span>
                <ul>
                    {arr}
                </ul>
            </div>
        );
    }
}

function Ppa (){
    return (
        <div>ppa</div>
    )
}


ReactDOM.render(
    <div>
       <App {...{
            a:'kaiwen',
            arr:[1,2,3,4,2]
        }}/>
       <Ppa />
    </div>,
    document.getElementById('root')
);



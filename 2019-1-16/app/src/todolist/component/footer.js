import React, { Component } from 'react';

class MyFooter extends Component {
    constructor(props) {
        super(props);
        //定义了一个初始的状态值/all,默认走全部
        this.state = {
            active:'/all'
        };
    }
    tab = (ev) => {
        //通过冒泡机制，给ul绑定点击事件函数，当点到了a，去获取a身上href的属性，从而拿到
        //后面的hash是谁，然后改变当前组件active的状态并且调用了父级传进来的changeActive方法
        //changeActive方法，可以改变父级中active值，通过这个值去过滤数据。

        let {nodeName,href} = ev.target;
        if(nodeName === 'A'){
            let active = href.split('#')[1];
            this.setState({active});
            this.props.changeActive(active);
        }
    }
    render() {
        let {active} = this.state;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.len}</strong>
                    <span>条未选中</span>
                </span>
                <ul 
                    className="filters"
                    onClick={this.tab}
                >
                    <li>
                        <a 
                            href="#/all" 
                            className={active==='/all'?'selected':''}
                        >全部</a>
                    </li>
                    <li>
                        <a 
                            href="#/unchecked" 
                            className={active==='/unchecked'?'selected':''}
                        >未选中</a>
                    </li>
                    <li>
                        <a 
                            href="#/checked" 
                            className={active==='/checked'?'selected':''}
                        >已选中</a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default MyFooter;
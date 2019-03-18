import React, { Component } from 'react';

class MyFooter extends Component {
    constructor(props) {
        super(props);
        //定义了一个初始的状态值/all,默认走全部
        this.state = {
            footerArr:[
                {
                    txt:'全部',
                    active:true,
                    hash:'#/all'
                },
                {
                    txt:'未选中',
                    active:false,
                    hash:'#/unchecked'
                },
                {
                    txt:'已选中',
                    active:false,
                    hash:'#/checked'
                }
            ]
        };
    }
    
    componentDidMount() {
        console.log(document.getElementById('root').children);
        let {footerArr} = this.state;
        let hash = window.location.hash;
        if(hash && hash !== '#/all'){
            footerArr.forEach(item => {
                if(item.hash === hash){
                    item.active = true;
                }else{
                    item.active = false;
                }
            });
            this.setState({footerArr});
        }
    }
    tab = ({txt,hash}) => {
        // console.log(active,txt);
        let {footerArr} = this.state;
        footerArr.forEach(item=>{
            if(item.txt === txt){
                item.active = true;
            }else{
                item.active = false;
            }
        });
        this.setState({footerArr});
        this.props.changeActive(hash.substring(1));
    }
    render() {
        console.log('render',this.state.kk);

        let {footerArr:arr} = this.state;
        //底部的li
        let fList = arr.map((item,i)=>{
            /*
                在事件中如果要传参,在事件上包一个箭头函数去传参。
                比如:
                    onClick={(ev)=>{this.click(ev,xx)}}
            */
            return  (
                <li key={i}>
                    <a 
                        onClick={()=>{this.tab(item)}}
                        href={item.hash}
                        className={item.active?'selected':''}
                    >{item.txt}
                    </a>
                </li>
            )
        });

        return (
            <footer className="footer">
               
                <span className="todo-count">
                    <strong>{this.props.len}</strong>
                    <span>条未选中</span>
                </span>
                <ul 
                    className="filters"
                >
                    {fList}
                </ul>
            </footer>
        );
    }
}

export default MyFooter;
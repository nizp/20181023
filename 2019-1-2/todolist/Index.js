import React,{Component} from 'react';
import './css/index.css';
class Index extends Component {
    render(){
        return (
            <section className="todoapp">
                <div>
                    <header className="header" >
                        <h1>todos</h1>
                        <input 
                            className="new-todo" 
                            placeholder="请输入内容" value="" />
                    </header>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked="" 
                        />
                        <ul className="todo-list">
                            <li className="completed">
                                <div className="view">
                                    <input 
                                        className="toggle" 
                                        type="checkbox" 
                                        checked="" />
                                    <label>多多对对对</label>
                                    <button className="destroy"></button>
                                </div>
                                {/* <!-- <input className="edit" value="多多对对对"> --> */}
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        )
    }
}

export {Index};


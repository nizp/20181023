import React,{Component} from 'react';
import List from './list';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:'',
      arr:['第一个li']
    }
    
  }
  fn = (ev) => {
      this.setState({
        val:ev.target.value
      });
  }

  up = (ev) => {
    if(ev.keyCode === 13){
      let {arr,val} = this.state;
      // let arr2 = arr.concat();
      // arr2.push(val);
      arr.push(val);
      this.setState({arr,val:''});
    }
  }

  render() { 
    
    let {val,arr} = this.state;

    //map一定要用return ***
    let list = arr.map((e,i)=>{
      return <List {...{
        key:i,
        val:e
      }}/>
    });

    return (
      <div>
        <input 
          type="text" 
          value={val}
          onChange={this.fn}
          onKeyUp={this.up}
        />
        <ul>{list}</ul>
      </div>
    );
  }
}
 
export default App;
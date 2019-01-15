import React,{Component} from 'react';
class List extends Component {
    render() { 
        return ( 
            <li>{this.props.val}</li>
        );
    }
}
 
export default List;
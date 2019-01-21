import React, { Component } from 'react';
class About extends Component {
    render() { 
        // console.log(this.props);
        let {match:{params:id},location:{search}} = this.props;
        let color = id.id ==='a'?'#000':'#fcc';
        console.log(search);
        return (
            <div>
               Aboutc
               <div style={{
                   width:'100px',
                    height:'100px',
                    background:color
               }}>{search.split('=')[1]}</div>
            </div>
        );
    }
}

export default About;
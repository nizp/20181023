import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class About extends Component {
    render() { 
        return (
            <div>
               About
               <Link to={{
                   pathname:'/about/a',
                   search:'?num=0'
               }}><button>A</button></Link>
                <Link to={{
                    pathname:'/about/b',
                    search:'?num=1'
                }}><button>B</button></Link>
                <Link to="/about/d"><button>D模板</button></Link>

               {/* <Link to="/about/b?num=1"><button>B</button></Link> */}
            </div>
        );
    }
}

export default About;
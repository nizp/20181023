import React, { Component } from 'react';
import propTypes from 'prop-types';
class PPa extends Component {
    render() { 
        return (
            <div>
                <div>子级</div>
                <button>{this.props.num}</button>
            </div>

        );
    }
}
PPa.propTypes = {
    num:propTypes.number
}
export default PPa;
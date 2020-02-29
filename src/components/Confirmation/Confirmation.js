import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {
 
    render() {
        return (
            <div className="Confirmation">
                <h2>Confirmation Component</h2>
            </div>
        )
    }
}
export default connect()(Confirmation);
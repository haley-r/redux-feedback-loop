import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {
    resetToStart =()=> {
        //go back to show feedback component
        this.props.history.push('/');
        //reset dispatches
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: null
        })
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: null
        })
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: null
        })
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: ''
        })
    }

    render() {
        return (
            <div className="Confirmation">
                <h2>Your Feedback Has Been Submitted. Thank You!</h2>
                <button onClick={this.resetToStart}>Leave New Feedback</button>
            </div>
        )
    }
}
export default connect()(Confirmation);
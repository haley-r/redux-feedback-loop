import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Confirmation extends Component {

    goToAdmin = () => {
        console.log('in gotoadmin');
        this.props.history.push('/admin')
    }

    //when Leave New Feedback button is clicked:
    resetToStart =()=> {
        //go back to show feedback component
        this.props.history.push('/');
        //reset states of reducers
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
            <Card className="Confirmation">
                <h2>Your Feedback Has Been Submitted.</h2>
                <h2>Thank You!</h2>
                <Button onClick={this.resetToStart} className="newFeedbackButton">Leave New Feedback</Button>
                <Button onClick={this.goToAdmin} className="adminButton">See Others' Feedback</Button>
            </Card>
        )
    }
}
export default connect()(Confirmation);
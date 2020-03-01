import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Comments extends Component {
    //local state holds the input value as selected by user
    //it changes whenever something new is entered
    //it is sent to reducer when next button is clicked
    state = {
        inputValue: this.props.reduxState.commentsReducer,

    }

    //keep the local state up to date with what's entered in the input
    storeInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    //go back to the previous question without saving input, even if it changed
    //this could be changed to also dispatch
    lastQuestion = () => {
        this.props.history.push('/support');
    }

    //when next button is clicked, do two things:
    //switch to next component, and dispatch input value to reducer 
    //history is a prop of the component given by Route
    //last path of history prop array is where you are
    //(descriptive and prescriptive)
    nextQuestion = () => {
        this.props.history.push('/review');
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.inputValue
        })
    }

    render() {
        return (
            <Card className="Comments">
                <h2>Any comments you want to leave?</h2>
                <form>
                    <label htmlFor="comments-input">Type your comment here:</label>
                    <input type="text" value={this.state.inputValue} id="comments-input" onChange={this.storeInput} />
                </form>
                <Button onClick={this.nextQuestion} className="nextButton">Next</Button>
                <Button onClick={this.lastQuestion} className="backButton">Back</Button>
            </Card>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});
export default connect(putReduxStateOnProps)(Comments);
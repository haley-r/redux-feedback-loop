import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    //local state holds the feedback object based on previous inputs
    //it is filled with info from reduxStore
    //it is sent to reducer when submit button is clicked
    state = {
        feeling: '',
        understanding: '',
        support: '',
        comments: ''
    }

    //upon loading, show all the entered feedback on the dom
    componentDidMount=()=>{
        this.compileFeedback();
    }

    //get the previously entered inputs from reduxStore
    compileFeedback = (event) => {
        this.setState({
            feeling: this.props.reduxState.feelingsReducer,
            understanding: this.props.reduxState.understandingReducer,
            support: this.props.reduxState.supportReducer,
            comments: this.props.reduxState.commentsReducer
        })
    }

    //when submit button is clicked, do two things:
    //switch to next component, and dispatch input value to reducer 
    //history is a prop of the component given by Route
    //last path of history prop array is where you are
    //(descriptive and prescriptive)
    submitFeedback = () => {
        //only do this if user has made selection
        if (this.state.inputValue !== '') {
            this.props.history.push('/confirmation');
            this.props.dispatch({
                type: 'CONFIRM_FEEDBACK',
                payload: this.state
            })
        }//end if
        else { alert('make a selection before proceeding'); }//end else
    }

    render() {
        return (
            <div className="Review">
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.state.feeling}</p>
                <p>Understanding: {this.state.understanding}</p>
                <p>Support: {this.state.support}</p>
                <p>Comments: {this.state.comments}</p>
                <button onClick={this.submitFeedback}>Submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps=(reduxState)=>({reduxState})
export default connect(putReduxStateOnProps)(Review);
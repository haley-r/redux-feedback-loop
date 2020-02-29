import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

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
        this.props.history.push('/confirmation');
        //axios post to update db
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
            alert('problem posting feedback');
        })
        
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
export default connect(putReduxStateOnProps)(withRouter(Review));
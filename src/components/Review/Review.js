import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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

    lastQuestion = () => {
        this.props.history.push('/comments');
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
            <Card className="Review">
                <h2>Review Your Feedback</h2>
                <div className="reviewStuff">
                    <p className="p-label"><span>Feelings:</span> {this.state.feeling}</p>
                    <p className="p-label"><span>Understanding:</span> {this.state.understanding}</p>
                    <p className="p-label"><span>Support:</span> {this.state.support}</p>
                    <p><span>Comments:</span></p><p>{this.state.comments}</p>
                </div>
                <Button onClick={this.lastQuestion} className="backButton">Back</Button> 
                <Button onClick={this.submitFeedback} className="nextButton">Submit</Button>
            </Card>
        )
    }
}

const putReduxStateOnProps=(reduxState)=>({reduxState})
export default connect(putReduxStateOnProps)(withRouter(Review));
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    //local state holds the input value as selected by user
    //it changes whenever something new is entered
    //it is sent to reducer when next button is clicked
    state = {
        inputValue: ''
    }

    //keep the local state up to date with what's entered in the input
    storeInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    //when next button is clicked, do two things:
    //switch to next component, and dispatch input value to reducer 
    //history is a prop of the component given by Route
    //last path of history prop array is where you are
    //(descriptive and prescriptive)
    nextQuestion = () => {
        //only do this if user has made selection
        if (this.state.inputValue !== '') {
            this.props.history.push('/review');
            this.props.dispatch({
                type: 'SET_COMMENTS',
                payload: this.state.inputValue
            })
        }//end if
        else { alert('make a selection before proceeding'); }//end else
    }

    render() {
        return (
            <div className="Comments">
                <h2>Any comments you want to leave?</h2>
                <form>
                    <label htmlFor="comments-input">Type your comment here:</label>
                    <input type="text" id="comments-input" onChange={this.storeInput} />
                </form>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}

export default connect()(Comments);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
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
            this.props.history.push('/comments');
            this.props.dispatch({
                type: 'SET_SUPPORT',
                payload: this.state.inputValue
            })
        }//end if
        else { alert('make a selection before proceeding'); }//end else
    }

    render() {
        return (
            <div className="Support">
                <h2>How well are you being supported?</h2>
                <form>
                    <input type="radio" id="support-1" name="support" value="1" onChange={this.storeInput} />
                    <label htmlFor="support-1">1</label>
                    <input type="radio" id="support-2" name="support" value="2" onChange={this.storeInput} />
                    <label htmlFor="support-2">2</label>
                    <input type="radio" id="support-3" name="support" value="3" onChange={this.storeInput} />
                    <label htmlFor="support-3">3</label>
                    <input type="radio" id="support-4" name="support" value="4" onChange={this.storeInput} />
                    <label htmlFor="support-4">4</label>
                    <input type="radio" id="support-5" name="support" value="5" onChange={this.storeInput} />
                    <label htmlFor="support-5">5</label>
                </form>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);
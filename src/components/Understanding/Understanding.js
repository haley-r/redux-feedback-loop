import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
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

    lastQuestion=()=>{
        this.props.history.push('/');
    }

    //when next button is clicked, do two things:
    //switch to next component, and dispatch input value to reducer 
    //history is a prop of the component given by Route
    //last path of history prop array is where you are
    //(descriptive and prescriptive)
    nextQuestion = () => {
        //only do this if user has made selection
        if (this.state.inputValue !== '') {
            this.props.history.push('/support');
            this.props.dispatch({
                type: 'SET_UNDERSTANDING',
                payload: this.state.inputValue
            })
        }//end if
        else { alert('make a selection before proceeding'); }//end else
    }

    render() {
        return (
            <div className="Understanding">
                <h2>How well are you understanding the content?</h2>
                <form>
                    <input type="radio" id="understanding-1" name="understanding" value="1" onChange={this.storeInput} />
                    <label htmlFor="understanding-1">1</label>
                    <input type="radio" id="understanding-2" name="understanding" value="2" onChange={this.storeInput} />
                    <label htmlFor="understanding-2">2</label>
                    <input type="radio" id="understanding-3" name="understanding" value="3" onChange={this.storeInput} />
                    <label htmlFor="understanding-3">3</label>
                    <input type="radio" id="understanding-4" name="understanding" value="4" onChange={this.storeInput} />
                    <label htmlFor="understanding-4">4</label>
                    <input type="radio" id="understanding-5" name="understanding" value="5" onChange={this.storeInput} />
                    <label htmlFor="understanding-5">5</label>
                </form>
                <button onClick={this.lastQuestion}>Back</button>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}

export default connect()(Understanding);
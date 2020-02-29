import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component{
    //local state holds the input value as selected by user
    //it changes whenever something new is entered
    //it is sent to reducer when next button is clicked
    state = {
        inputValue: this.props.reduxState.feelingsReducer,
    }

    //keep the local state up to date with what's entered in the input
    storeInput=(event)=>{
        this.setState({
            inputValue: event.target.value,
        })
    }

    //when next button is clicked, do two things:
    //switch to next component, and dispatch input value to reducer 
    //history is a prop of the component given by Route
    //last path of history prop array is where you are
    //(descriptive and prescriptive)
    nextQuestion=()=>{
        //only do this if user has made selection
        if (this.state.inputValue!==null){
            this.props.history.push('/understanding');
            this.props.dispatch({
                type: 'SET_FEELING',
                payload: this.state.inputValue
            })}//end if
        else {alert('make a selection before proceeding');}//end else
    }

    render(){
        return(
            <div className="Feeling">
                <h2>How are you feeling today?</h2>
                    <form>
                    <input type="radio" id="feelings-1" name="feelings" value="1" checked={this.state.inputValue==='1'} onChange={this.storeInput}/>
                        <label htmlFor="feelings-1">1</label>
                    <input type="radio" id="feelings-2" name="feelings" value="2" checked={this.state.inputValue === '2'} onChange={this.storeInput} />
                        <label htmlFor="feelings-2">2</label>
                    <input type="radio" id="feelings-3" name="feelings" value="3" checked={this.state.inputValue === '3'} onChange={this.storeInput} />
                        <label htmlFor="feelings-3">3</label>
                    <input type="radio" id="feelings-4" name="feelings" value="4" checked={this.state.inputValue === '4'} onChange={this.storeInput} />
                        <label htmlFor="feelings-4">4</label>
                    <input type="radio" id="feelings-5" name="feelings" value="5" checked={this.state.inputValue === '5'} onChange={this.storeInput} />
                        <label htmlFor="feelings-5">5</label>
                    </form>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})
export default connect(putReduxStateOnProps)(Feeling);
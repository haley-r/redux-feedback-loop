import React, {Component} from 'react';

class Feeling extends Component{
    //when next button is clicked, change path by putting
    //a path into history array in component props
    //(given to it by Route)
    //last path in array is where you are
    //both descriptive and prescriptive
    nextQuestion=()=>{
        console.log('in nextQuestion');
        this.props.history.push('/understanding');
    }

    render(){
        return(
            <div className="Feeling">
                <h2>How are you feeling today?</h2>
                <form>
                    <label>Feeling?</label>
                    <input type="number"></input>
                </form>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}

export default Feeling;
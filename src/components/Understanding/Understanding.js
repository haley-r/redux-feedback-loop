import React, {Component} from 'react';

class Understanding extends Component{
    //when next button is clicked, change path by putting
    //a path into history array in component props
    //(given to it by Route)
    //last path in array is where you are
    //both descriptive and prescriptive
    nextQuestion = () => {
        console.log('in nextQuestion');
        this.props.history.push('/support');
    }

    render() {
        return (
            <div className="Understanding">
                <h2>How well are you understanding the content?</h2>
                <form>
                    <label>Understanding?</label>
                    <input type="number"></input>
                </form>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}

export default Understanding;
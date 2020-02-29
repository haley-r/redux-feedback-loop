import React, {Component} from 'react';

class Support extends Component{
    //when next button is clicked, change path by putting
    //a path into history array in component props
    //(given to it by Route)
    //last path in array is where you are
    //both descriptive and prescriptive
    nextQuestion = () => {
        console.log('in nextQuestion');
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div className="Support">
                <h2>How well are you being supported?</h2>
                <form>
                    <label>Support?</label>
                    <input type="number"></input>
                </form>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}
export default Support;
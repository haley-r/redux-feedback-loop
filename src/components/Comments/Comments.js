import React, {Component} from 'react';

class Comments extends Component{
    //when next button is clicked, change path by putting
    //a path into history array in component props
    //(given to it by Route)
    //last path in array is where you are
    //both descriptive and prescriptive
    nextQuestion = () => {
        console.log('in nextQuestion');
        this.props.history.push('/review');
    }

    render() {
        return (
            <div className="Comments">
                <h2>Any comments you want to leave?</h2>
                <form>
                    <label>Comments</label>
                    <input type="number"></input>
                </form>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        )
    }
}

export default Comments;
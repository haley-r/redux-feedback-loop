import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

//components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Confirmation from '../Confirmation/Confirmation';

class Admin extends Component {
    componentDidMount = () => {
        // this.showFeedback();
    }

    // showFeedback=()=>{
    //   console.log('trying axios in app.js');
    //   axios({
    //     method: 'GET',
    //     url: '/feedback'
    //   }).then((response) => {
    //     console.log('response.data from showFeedback:', response.data);
    //   }).catch((error)=>{
    //     console.log(error);
    //     alert('problem getting feedback');
    //   }
    //   )
    // }

    render() {
        return (
            <div className="Admin">
                <header className="App-header">
                    <h1 className="App-title">FEEDBACK</h1>
                    {/* <h4><i>Don't forget it!</i></h4> */}
                </header>
                <Router>
                    <Route exact path="/" component={Feeling} />
                    <Route path="/understanding" component={Understanding} />
                    <Route path="/support" component={Support} />
                    <Route path="/comments" component={Comments} />
                    <Route path="/review" component={Review} />
                    <Route path="/confirmation" component={Confirmation} />
                </Router>
                <footer>
                    <p>Weekend Challenge #5 - Haley Ryan</p>
                </footer>
            </div>
        );
    }
}

export default Admin;

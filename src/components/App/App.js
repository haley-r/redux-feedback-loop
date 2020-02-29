import React, { Component } from 'react';
// import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

//components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Confirmation from '../Confirmation/Confirmation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route exact path="/" component={Feeling}/>
          <Route path="/understanding" component={Understanding}/>
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/confirmation" component={Confirmation}/>
        </Router>
      </div>
    );
  }
}

export default App;

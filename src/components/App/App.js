import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Feeling/>
        <Understanding/>
        <Support/>
        <Comments/>
        <Review/>
      </div>
    );
  }
}

export default App;

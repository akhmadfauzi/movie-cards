import React, { Component } from 'react';
import '../styles/App.css';
import NowPlaying from './NowPlaying';

class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>Movie Cards</h1>
		<NowPlaying></NowPlaying>
      </div>
    );
  }
}

export default App;

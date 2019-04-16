import React, { Component } from 'react';
import '../styles/app.css';
import NowPlaying from './NowPlaying';
import Discover from './Discover';

class App extends Component {
  render() {
    return (
      <div className="app">
		<NowPlaying></NowPlaying>
		<Discover></Discover>
      </div>
    );
  }
}

export default App;

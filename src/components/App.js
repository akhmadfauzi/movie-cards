import React, { Component } from 'react';
import '../styles/app.css';
import NowPlaying from './NowPlaying';
import Discover from './Discover';
import Navbar from '../containers/Navbar';
import MoviesList from './MoviesList';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar></Navbar>
				<MoviesList></MoviesList>
			</div>
		);
	}
}

export default App;

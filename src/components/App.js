import React, { Component } from 'react';
import '../styles/app.css';
// import NowPlaying from './NowPlaying';
// import Discover from './Discover';
import Movie from './Movie';
import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';
import MoviesList from './MoviesList';
import {Route} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar></Navbar>
				{/* <MoviesList></MoviesList> */}
				<Route path="/" exact component={MoviesList}></Route>
				<Route path="/movie/:id" component={Movie} />
				<Footer></Footer>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import '../styles/scss/app.scss';
// import NowPlaying from './NowPlaying';
// import Discover from './Discover';
import Movie from './Movie';
import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';
import MoviesList from './MoviesList';
import Category from './Category';
import Search from './Search';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar></Navbar>
				{/* <MoviesList></MoviesList> */}
				<Route path="/" exact component={MoviesList}></Route>
				<Route path="/movie/:id" component={Movie} />
				<Route path="/category/" component={Category} />
				<Route path="/search/:query" component={Search} />
				<Footer></Footer>
			</div>
		);
	}
}

export default App;

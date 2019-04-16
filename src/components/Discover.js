import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/discover.css';
import { fetchNowPlaying } from '../actions';
import NowPlayingMovie from './NowPlayingMovie';

function mapStateToProps(state) {
	return {
		loading: state.nowPlaying.isFetching,
		movies: state.nowPlaying.items
	};
}

class Discover extends Component {
	componentDidMount() {
		this.props.fetchNowPlaying()
	}
	discoverMovieList() {
		let list = [];
		list = this.props.movies.slice(0, 15).map((movie, i) => {
			return (<NowPlayingMovie key={movie.id} isHighlighted={i == 2 ? true : false} movie={movie}></NowPlayingMovie>);
		})

		return (
			<React.Fragment>
				{list}
			</React.Fragment>
		)
	}

	render() {

		const content = this.props.loading ? (<h1>Loading...</h1>) : this.discoverMovieList();

		return (
			<div className="discover">
				<div className="discover__header">
					<div className="left title"><h1>Discover Movies</h1></div>
					<div className="center category">
						<ul>
							<li><a href="http://" target="_blank" rel="noopener noreferrer">Random</a></li>
							<li><a href="http://" target="_blank" rel="noopener noreferrer">Popular</a></li>
							<li><a href="http://" target="_blank" rel="noopener noreferrer">Recent</a></li>
						</ul>
					</div>
					<div className="right search">
						<input type="text" placeholder="Enter keyword..." />
					</div>
				</div>
				<div className="discover__content">
					{content}
				</div>
				<div className="discover__footer"></div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, { fetchNowPlaying }
)(Discover);
import '../styles/movies-list.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying } from '../actions';
import MoviesListItem from './MoviesListItem';

function mapStateToProps(state) {
	return {
		loading: state.nowPlaying.isFetching,
		movies: state.nowPlaying.items
	};
}

class MoviesList extends Component {
	componentDidMount() {
		this.props.fetchNowPlaying()
	}

	movies() {
		let list = [];
		list = this.props.movies.slice(0, 12).map((movie, i) => {
			return (<MoviesListItem key={movie.id} movie={movie}></MoviesListItem>);
		})

		return (
			<React.Fragment>
				{list}
			</React.Fragment>
		)
	}
	render() {
		const content = this.props.loading ? (<h1>Loading...</h1>) : this.movies();

		return (
			<div className="movies-list">
				<div className="movies-list__header">
				</div>
				<div className="movies-list__content">
					{content}
				</div>
				<div className="movies-list__footer"></div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, { fetchNowPlaying }
)(MoviesList);
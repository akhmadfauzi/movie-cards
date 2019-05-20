import '../styles/scss/movies-list.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchNowPlaying, onPageChange, searchMovies, onEmptyQuery } from '../actions';
import MoviesListItem from '../components/MoviesListItem';
import Pagination from '../components/Pagination';

function mapStateToProps(state) {
	return {
		loading: state.nowPlaying.isFetching,
		movies: !state.nowPlaying.results ? [] : state.nowPlaying.results,
		totalPages: !state.pagination ? 0 : state.pagination.total_pages,
		currentPage: !state.pagination ? 1 : state.pagination.page,
		searchResults: !state.searchResult ? null : state.searchResult,
		type: !state.pagination ? undefined : state.pagination.type,
		query: !state.searchResult ? undefined : state.searchResult.query
	};
}
function withMovieList(WrappedComponent) {
	return class extends Component {

		componentDidMount() {
			this.props.fetchNowPlaying(this.props.currentPage);
		}

		movies(search = null) {
			let list = [];
			list = this.props.movies.map((movie, i) => {
				return (<MoviesListItem key={movie.id} movie={movie}></MoviesListItem>);
			})

			return (
				<React.Fragment>
					{list}
				</React.Fragment>
			)
		}
		pageChangeHandler(e) {
			const page = e.target.dataset.pageNumber;
			this.props.onPageChange(page);
		}
		render() {
			return (<WrappedComponent {...this.props}></WrappedComponent>)
		}
	}


}

export default connect(
	mapStateToProps, { fetchNowPlaying, onPageChange, searchMovies, onEmptyQuery }
)(withMovieList);
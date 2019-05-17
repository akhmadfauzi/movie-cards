import '../styles/scss/movies-list.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying, onPageChange, searchMovies, onEmptyQuery } from '../actions';
import MoviesListItem from './MoviesListItem';
import Pagination from './Pagination';

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

class MoviesList extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetchNowPlaying(this.props.currentPage);
	}

	searchHandler(e) {
		
		const key = e.keyCode ? e.keyCode : e.charCode;
		if (key == 13) {
			e.preventDefault();
			const query = e.target.value;
			if(query === ''){
				this.props.fetchNowPlaying(this.props.currentPage);
				this.props.onEmptyQuery();
			}else{
				this.props.searchMovies(query);
			}
			
		}
	}

	movies(search = null) {
		let list = [];
		const resources = search ? search.results : this.props.movies;
		list = resources.map((movie, i) => {
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
		if(this.props.type === 'RECEIVED_NOW_PLAYING'){
			this.props.fetchNowPlaying(page);
		}else{
			this.props.searchMovies(this.props.query,page)
		}
	}
	render() {
		const content = this.props.loading ? (<h1>Loading...</h1>) : (this.props.query !== undefined ? this.movies(this.props.searchResults.results) : this.movies());

		return (
			<div className="movies-list">
				<div className="movies-list__header">
					<form method="post">
						<input type="text" placeholder="Search movies..." onKeyPress={this.searchHandler.bind(this)} />
					</form>
				</div>
				<div className="movies-list__content">
					{content}
				</div>
				<div className="movies-list__footer">
					<Pagination
						perpage="20"
						adjacent="3"
						totalPages={this.props.totalPages}
						currentPage={this.props.currentPage}
						onPageChange={this.pageChangeHandler.bind(this)}>
					</Pagination>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, { fetchNowPlaying, onPageChange, searchMovies,onEmptyQuery }
)(MoviesList);
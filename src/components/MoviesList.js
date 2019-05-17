import '../styles/scss/movies-list.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying,onPageChange } from '../actions';
import MoviesListItem from './MoviesListItem';
import Pagination from './Pagination';

function mapStateToProps(state) {
	return {
		loading: state.nowPlaying.isFetching,
		movies: !state.nowPlaying.results ? [] : state.nowPlaying.results,
		totalPages: !state.nowPlaying.total_pages ? 0 : state.nowPlaying.total_pages,
		currentPage: !state.nowPlaying.page ? 1 : state.nowPlaying.page

	};
}

class MoviesList extends Component {
	constructor(props) {
		super(props)
		
	}

	componentDidMount() {
		this.props.fetchNowPlaying(this.props.currentPage);
	}

	movies() {
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
	pageChangeHandler(e){

		const page= e.target.dataset.pageNumber;
		this.props.onPageChange(page);
		this.props.fetchNowPlaying(page);
	}
	render() {
		const content = this.props.loading ? (<h1>Loading...</h1>) : this.movies();

		return (
			<div className="movies-list">
				<div className="movies-list__header">
					<input type="text" placeholder="Search movies..."/>
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
	mapStateToProps, { fetchNowPlaying, onPageChange }
)(MoviesList);
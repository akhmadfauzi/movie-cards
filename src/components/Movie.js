import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieById } from '../actions';
import '../styles/movie.css';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
	return ({
		movie: state.movie.item,
		loading: state.movie.isFetching
	})
}

const mapDispatchToProps = {
	fetchMovieById
}

class Movie extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.getMovie();
	}

	componentWillUnmount(){
		this.getMovie();
	}

	getMovie() {
		this.props.fetchMovieById(this.props.match.params.id);
	}

	showMovie(movie) {
		return (
			<React.Fragment>
				<div className="movie__header">
					<Link to="/"><i className="fas fa-long-arrow-alt-left"></i> Back</Link>
					<h1>{movie.title}</h1>
				</div>
				<div className="movie__content">
					<img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
					<div className="movie__description">
						<p className="description__title">{movie.vote_average} <i className="fas fa-star"></i> </p>
						<p className="description__title">Synopsis : </p>
						<p className="description__content">{movie.overview}</p>
					</div>
					
				</div>
				<div className="movie__footer"></div>
			</React.Fragment>
		)
	}


	render() {
		const content = this.props.loading && typeof this.props.movie === 'undefined' ? <h1>Loading...</h1> : (this.props.movie ? this.showMovie(this.props.movie) : <h1>Loading...</h1>);
		return (
			<div className="movie">
				{content}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
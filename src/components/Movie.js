import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieById, fetchCredits } from '../actions';
import '../styles/scss/movie.scss';
import { Link } from 'react-router-dom';
import MovieCasts from './MovieCasts';

const mapStateToProps = (state) => {
	return ({
		movie: state.movie.item,
		loading: state.movie.isFetching,
		credits: state.movie.credits,
		creditsLoading: state.movie.credits.isFetching
	})
}

const mapDispatchToProps = {
	fetchMovieById,
	fetchCredits
}

class Movie extends Component {

	componentDidMount() {
		this.getMovie();
	}

	componentWillUnmount() {
		this.getMovie();
	}

	getMovie() {
		this.props.fetchMovieById(this.props.match.params.id);
		this.props.fetchCredits(this.props.match.params.id);
	}

	showMovie(movie) {
		let genres;
		const credits = this.props.creditsLoading ? <h1 style={{ color: 'red' }}>loading</h1> : this.props.credits.item;
		const casts = this.props.creditsLoading ? (<h1>Loading...</h1>) : <MovieCasts casts={credits.cast}></MovieCasts>;
		if (!this.props.creditsLoading) {
			genres = movie.genres.map((v, i) => {
				if (i == (movie.genres.length - 1)) {
					return <span key={v.id}>{v.name}</span>
				} else {
					return <span key={v.id}>{v.name} / </span>
				}
			})
		};
		return (
			<React.Fragment>
				<div className="movie__content">
					<div className="movie__header">
						{/* <Link to="/"><i className="fas fa-long-arrow-alt-left"></i> Back</Link> */}
						<div className="movie__header__jumbotron">
							<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
						</div>
						<div className="movie__header__text">
							<h1>{movie.title}</h1>
							<div className="movie__header__genres">{genres}</div>
						</div>

					</div>
					<div className="movie__description">
						{/* <h1>Synopsis</h1> */}

						{/* <p className="description__title"></p> */}
						<p className="description__content">{movie.overview}</p>
					</div>
					<div className="movie__credits">
						{casts}
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
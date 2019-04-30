import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieById, fetchCredits } from '../actions';
import '../styles/movie.css';
import {Link} from 'react-router-dom';

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

	componentWillUnmount(){
		this.getMovie();
	}

	getMovie() {
		this.props.fetchMovieById(this.props.match.params.id);
		this.props.fetchCredits(this.props.match.params.id);
	}

	getCasts(casts){
		casts = casts.slice(0,10);
		casts = casts.map((actor)=>(
			<div key={actor.cast_id}>
				<p>{actor.name} as {actor.character}</p>
				
			</div>
		));

		return (
			<div className="cast-list">
			<p>Cast : </p>
				{casts}
				<p> <Link to="/">See full cast <i className="fas fa-long-arrow-alt-right"></i></Link></p>
			</div>
		)
	}

	showMovie(movie) {
		const credits = this.props.creditsLoading ? <h1 style={{color:'red'}}>loading</h1> : this.props.credits.item;
		const casts = this.props.creditsLoading ? (<h1>Loading...</h1>) : this.getCasts(credits.cast);
		
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
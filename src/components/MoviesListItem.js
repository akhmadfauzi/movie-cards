import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/movies-list-item.css';

function mapStateToProps(state) {
	return {

	};
}

const MovieListitem = (props) => {
	const movie = props.movie;
	const rating = movie.vote_average / 2;
	const stars = ((rating) => {
		let stars = [];
		const fractions = rating.toFixed(1).split('.');
		const head = parseInt(fractions[0]);
		const tail = parseInt(fractions[1]);
		for (let i = 0; i < 4; i++) {
			if (i < head) {
				stars = [...stars, (<i className="fas fa-star"></i>)];
			}

			if (i > head && fractions.length) {
				if (tail >= 3 && tail <= 9) {
					stars = [...stars, (<i className="fas fa-star-half-alt"></i>)];
				}
			}						
		}
		
		if(stars.length < 5){
			for (let j = 0; j <= 5-stars.length; j++) {
				stars = [...stars, (<i className="far fa-star"></i>)];
			}
		}
		return stars;
	})(rating);

	const synopsis = movie.overview.length > 56 ? movie.overview.substr(0,56) + ' ...[Read More]' : movie.overview;
	return (
		<div className="movie-item">
			<div className="movie-item__header">
				<img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} title={movie.title} />
			</div>
			<div className="movie-item__content">
				<p>{stars}</p>
				<h1>{movie.title}</h1>
				<p className="synopsis">{synopsis}</p>
			</div>
			<div className="movie-item__footer"></div>
		</div>
	)
}

export default connect(
	mapStateToProps,
)(MovieListitem);





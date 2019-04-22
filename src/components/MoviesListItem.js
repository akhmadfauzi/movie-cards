import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/movies-list-item.css';
import {Link} from 'react-router-dom';
function mapStateToProps(state) {
	return {

	};
}

function getStar(vote) {
	let stars = [];
	const rating = (vote / 2).toFixed(1);
	const fractions = rating.split('.');
	const head = parseInt(fractions[0]);
	const tail = parseInt(fractions[1]);
	for (let i = 0; i < 4; i++) {
		if (i < head) {
			stars = [...stars, (<i className="fas fa-star"></i>)];
		}
	}

	if ((tail >= 4 && tail <= 9)) {
		stars = [...stars, (<i className="fas fa-star-half-alt"></i>)];
	}

	if (stars.length < 5) {
		for (let j = 0; j <= 5 - stars.length; j++) {
			stars = [...stars, (<i className="far fa-star"></i>)];
		}
	}
	return stars;
}

function getExcerpt(synopsis){
	const synopsisFractions = synopsis.split(' ');
	let excerpt = synopsisFractions.length > 11 ? synopsisFractions.slice(0,10).join(' ') : synopsis;
	excerpt = excerpt.length > 56 ? excerpt.substr(0,46) + ' ...[Read More]' : excerpt + ' ...[Read More]';
	return excerpt;
}

const MovieListitem = (props) => {
	const movie = props.movie;
	const stars = getStar(movie.vote_average).length ? getStar(movie.vote_average) : 'Loading...';
	const rating = (movie.vote_average / 2).toFixed(1);
	// const synopsis = movie.overview;
	// const excerpt = getExcerpt(synopsis);
	const title = movie.title.split(' ').length > 4 ? movie.title.split(' ').slice(0, 4).join(' ') + '...' : movie.title;

	return (
		<div className="movie-item">
			<div className="movie-item__header">
				<img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} title={movie.title} />
			</div>
			<div className="movie-item__content">
				<p title={rating}>{stars}</p>
				<h1 title={movie.title}><Link to={`/movie/${movie.id}`}>{title}</Link></h1>
				{/* <p >{excerpt}</p> */}
			</div>
			<div className="movie-item__footer"></div>
		</div>
	)
}

export default connect(
	mapStateToProps,
)(MovieListitem);





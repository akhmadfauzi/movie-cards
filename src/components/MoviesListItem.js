import React from 'react';
import { connect } from 'react-redux';
import '../styles/scss/movies-list-item.scss';
import { Link } from 'react-router-dom';
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

// function getExcerpt(synopsis){
// 	const synopsisFractions = synopsis.split(' ');
// 	let excerpt = synopsisFractions.length > 11 ? synopsisFractions.slice(0,10).join(' ') : synopsis;
// 	excerpt = excerpt.length > 56 ? excerpt.substr(0,46) + ' ...[Read More]' : excerpt + ' ...[Read More]';
// 	return excerpt;
// }

const MovieListitem = (props) => {
	const movie = props.movie;
	const stars = getStar(movie.vote_average).length ? getStar(movie.vote_average) : 'Loading...';
	const rating = movie.vote_average > 0 ? (<p title={rating}>{movie.vote_average}/10 <i className="fas fa-star"></i>{/*{stars}*/}</p>) : (<p>N/A</p>);

	const title = movie.title.split(' ').length > 4 ? movie.title.split(' ').slice(0, 4).join(' ') + '...' : movie.title;
	const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : 'http://placekitten.com/g/200/300'
	return (
		<div className="movie-item">
			<div className="movie-item__header">
				<Link to={`/movie/${movie.id}`}>
					<img src={poster} alt={movie.title} title={movie.title} />
				</Link>
			</div>
			<div className="movie-item__content">
				{rating}
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





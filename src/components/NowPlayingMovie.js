import React from 'react';
import PropTypes from 'prop-types';

const NowPlayingMovie = props => {

	const movie = props.movie;
	const year = new Date(movie.release_date).getFullYear();
	const highlight = props.isHighlighted ? 'highlight' : ''
	return (
		<div className={`now-playing__movie ${highlight}`}>
		<div className="now-playing__movie-header">
			<img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} title={movie.title}/>
		</div>
		<div className="now-playing__movie-content">
		<span>{year}</span>
		<h1>{movie.title}</h1>
		</div>
		<div className="now-playing__movie-footer"></div>
		</div>
	);
};

NowPlayingMovie.propTypes = {
	
};

export default NowPlayingMovie;
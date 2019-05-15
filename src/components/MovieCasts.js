import React, { Component } from 'react';
import '../styles/scss/movie-casts.scss';
import { Link } from 'react-router-dom';

const MovieCasts = (props) => {

	let casts = props.casts.slice(0, 9);

	casts = casts.map((actor) => {
		let image = actor.profile_path ? `https://image.tmdb.org/t/p/w92${actor.profile_path}` : 'https://api.adorable.io/avatars/92/abott@adorable.png'
		return (
			<div key={actor.cast_id} className="movie-cast-list__item">
				<div className="image-container">
					<img src={image} /></div>
				<p className="name">{actor.name}</p>
				<p className="character">{actor.character}</p>
			</div>
		)
	});
	return (
		<div className="movie-cast-list">
			<div className="movie-cast-list__header">
				<h1>Cast</h1>
			</div>
			<div className="movie-cast-list__body">
				{casts}
			</div>
			<div className="movie-cast-list__footer">
				<Link to="/">See full cast <i className="fas fa-long-arrow-alt-right"></i></Link>
			</div>
		</div>
	)
}

export default MovieCasts;
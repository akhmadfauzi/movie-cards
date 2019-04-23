import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieById } from '../actions';
import '../styles/movie.css';

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

	componentDidUpdate(prev){
		// console.log(prev.movie);
		// console.log(this.props.movie);
		// console.log(this.props);
	}

	componentWillUnmount(){
		this.getMovie();
	}

	getMovie() {
		this.props.fetchMovieById(this.props.match.params.id);
	}

	showMovie() {
		const movie = this.props.movie;
		console.log(movie);
		if(movie){
			return (
				<React.Fragment>
					<div className="movie__header">
						<h1>{movie.title}</h1>
					</div>
					<div className="movie__content">
						<img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
						<p>
							{movie.overview}
						</p>
					</div>
					<div className="movie__footer"></div>
				</React.Fragment>
			)
		}else{
			return (<h1>Loading...</h1>);
		}
	}


	render() {
		const content = this.props.loading ? <h1>Loading...</h1> : this.showMovie();
		return (
			<div className="movie" style={{ color: '#fff' }}>
				{content}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
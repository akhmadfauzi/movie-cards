import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/now-playing.css';
import { fetchNowPlaying } from '../actions';
import NowPlayingMovie from './NowPlayingMovie';

function mapStateToProps(state) {
	return {
		loading: state.nowPlaying.isFetching,
		movies: state.nowPlaying.items
	};
}

class NowPlaying extends Component {
	componentDidMount() {
		this.props.fetchNowPlaying()
	}

	nowPlayingList(){
		let list = [];
		list = this.props.movies.slice(0,5).map((movie,i)=>{
			return (<NowPlayingMovie key={movie.id} isHighlighted={i==2?true:false} movie={movie}></NowPlayingMovie>);
		}) 

		return(
			<React.Fragment>
				{list}
			</React.Fragment>		
		)
	}

	render() {
		const content = this.props.loading ? (<h1>Loading...</h1>) : this.nowPlayingList();
		return (
			<div className="now-playing">
				<div className="now-playing__content">
					{content}
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, { fetchNowPlaying }
)(NowPlaying);
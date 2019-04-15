import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying } from '../actions';
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
		for (const movie of this.props.movies) {
			list = [(<li key={movie.id}>{movie.title}</li>),...list];
		}

		return(
			<ul>
				{list}
			</ul>
		)
	}
	render() {
		const content = this.props.loading ? (<h1>Loading...</h1>) : this.nowPlayingList();
		return (
			<div>
				{content}
			</div>
		);
	}
}

export default connect(
	mapStateToProps, { fetchNowPlaying }
)(NowPlaying);
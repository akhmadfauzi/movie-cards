import * as act from '../actions';

const initialState = {
	nowPlaying: {
		isFetching: false,
		items: []
	},
	movie: {
		isFetching: false,
		item: undefined,
		credits: {
			isFetching : false,
			item: undefined
		}
	},
	ui: {
		navbar: {
			toggle: false
		}
	}
}

export default function movies(state = initialState, action) {
	switch (action.type) {

		case act.TOGGLE_CLICK:
			return {
				...state,
				ui: {
					...state.ui,
					navbar: {
						...state.navbar,
						toggle: state.ui.navbar.toggle ? false : true
					}
				}
			}

		case act.REQUEST_NOW_PLAYING:
			return {
				...state,
				nowPlaying: {
					isFetching: action.isFetching
				}
			}
		case act.RECEIVED_NOW_PLAYING:
			return {
				...state,
				nowPlaying: {
					isFetching: false,
					items: [...action.items.results]
				}
			}
		case act.RECEIVED_MOVIE_DETAILS:
			return {
				...state,
				movie: {
					...state.movie,
					item: action.movie,
					isFetching: false
				}
			}
		case act.REQUEST_MOVIE_DETAILS:
			return {
				...state,
				movie: {
					...state.movie,
					item: undefined,
					isFetching: action.isFetching,
				}
			}
		case act.REQUEST_MOVIE_CREDITS:
			return {
				...state,
				movie: {
					...state.movie,
					credits:{
						...state.credits,
						isFetching: action.isFetching,
					}
				}
			}
		case act.RECEIVED_MOVIE_CREDITS:
			return {
				...state,
				movie: {
					...state.movie,
					credits:{
						...state.credits,
						item: action.credits,
						isFetching: false
					}
				}
			}

		default:
			return state;
	}

}
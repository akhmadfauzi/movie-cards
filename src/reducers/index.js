import * as act from '../actions';

const initialState = {
	nowPlaying: {
		isFetching: false
	},
	movie: {
		isFetching: false,
		item: undefined,
		credits: {
			isFetching: false,
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
					isFetching: action.isFetching,
					...state.nowPlaying
				}
			}
		case act.RECEIVED_NOW_PLAYING:
			const { page, total_results, total_pages } = action.movies
			return {
				...state,
				nowPlaying: {
					isFetching: false,
					results: action.movies.results
				},
				pagination: {
					page,
					total_results,
					total_pages,
					type: act.RECEIVED_NOW_PLAYING
				}
			}
		case act.ON_PAGE_CHANGE:
			return {
				...state,
				pagination: {
					...state.pagination,
					page: action.page
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
					credits: {
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
					credits: {
						...state.credits,
						item: action.credits,
						isFetching: false
					}
				}
			}
		case act.REQUEST_SEARCH_MOVIES:
			return {
				...state,
				searchResult: {
					...state.searchResult,
					query: action.query
				}
			}
		case act.ON_EMPTY_QUERY:
			delete state.searchResult
			return {
				...state				
			}
		case act.RECEIVED_SEARCH_MOVIES:
			{
				const { page, total_results, total_pages } = action.results

				return {
					...state,
					searchResult: {
						...state.searchResult,
						results: action.results
					},
					pagination: {
						...state.pagination,
						page, total_results, total_pages,
						type: act.RECEIVED_SEARCH_MOVIES
					}
				}
			}

		default:
			return state;
	}

}
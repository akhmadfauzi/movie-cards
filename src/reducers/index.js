import * as act from '../actions';

const initialState = {
	'nowPlaying' : {
		'isFetching':false,
		'items':[]
	},
	'movie': null
}

export default function movies(state = initialState, action){
	console.log(action.type);
	switch (action.type) {
		
		case act.REQUEST_NOW_PLAYING:
			return  {
				...state,
				nowPlaying:{
					isFetching: action.isFetching
				}
			}
			case act.RECEIVED_NOW_PLAYING:
			return  {
				...state,
				nowPlaying:{
					isFetching: false,
					items: [...action.items.results]
				}
			}
			case act.RECEIVED_MOVIE_DETAILS:
			return {
				...state,
				movie:action.movie
			}

			
	
		default:
			return state;
	}
	
}
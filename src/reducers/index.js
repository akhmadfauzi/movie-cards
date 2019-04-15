import * as act from '../actions';

const initialState = {
	'nowPlaying' : {
		'isFetching':false,
		'items':[]
	}
}

export default function movies(state = initialState, action){
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
			
	
		default:
			return state;
	}
	
}
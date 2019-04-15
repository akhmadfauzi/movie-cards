export const API_KEY = '9d9c0d73b46a889cf1503cd92b762903';

export const NOW_PLAYING = 'NOW_PLAYING';
export const getNowPlaying = () => ({
	type: NOW_PLAYING
})

export const REQUEST_NOW_PLAYING = 'REQUEST_NOW_PLAYING';
export const requestNowPlaying = () => ({
	type: REQUEST_NOW_PLAYING,
	isFetching: true
})


export const RECEIVED_NOW_PLAYING = 'RECEIVED_NOW_PLAYING';
export const receivedNowPlaying = (result) => ({
	type:RECEIVED_NOW_PLAYING,
	isFetching: false,
	items: result
})

export function fetchNowPlaying(){
	return function(dispatch){
		dispatch(requestNowPlaying());
		const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
		return fetch(url)
		.then(response=>response.json())
		.then(result=>{
			dispatch(receivedNowPlaying(result));
		})
	}
}
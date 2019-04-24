export * from './ui';

const API_KEY = '9d9c0d73b46a889cf1503cd92b762903';
const BASE_URL = 'https://api.themoviedb.org/3';


export const NOW_PLAYING = 'NOW_PLAYING';
export const getNowPlaying = () => ({
	type: NOW_PLAYING
})

export const REQUEST_NOW_PLAYING = 'REQUEST_NOW_PLAYING';
export const requestNowPlaying = () => ({
	type: REQUEST_NOW_PLAYING,
	isFetching: true
});


export const RECEIVED_NOW_PLAYING = 'RECEIVED_NOW_PLAYING';
export const receivedNowPlaying = (result) => ({
	type:RECEIVED_NOW_PLAYING,
	isFetching: false,
	items: result
})
export const RECEIVED_MOVIE_DETAILS = 'RECEIVED_MOVIE_DETAILS';
export const receivedMovieDetails = (result) => ({
	type:RECEIVED_MOVIE_DETAILS,
	isFetching:false,
	movie: result
})

export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
export const requestMovieDetails = () => ({
	type:REQUEST_MOVIE_DETAILS,
	isFetching : true
})

export function fetchNowPlaying(){
	return function(dispatch){
		dispatch(requestNowPlaying());
		const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
		return fetch(url)
		.then(response=>response.json())
		.then(result=>{
			dispatch(receivedNowPlaying(result));
		})
	}
}

export function fetchMovieById(id){
	return function(dispatch){
		dispatch(requestMovieDetails());
		const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
		return fetch(url)
		.then(response=>response.json())
		.then(result=>{
			dispatch(receivedMovieDetails(result));
		})
	}
}
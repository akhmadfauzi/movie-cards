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
export const receivedNowPlaying = (results) => ({
	type: RECEIVED_NOW_PLAYING,
	isFetching: false,
	movies:results
})
export const RECEIVED_MOVIE_DETAILS = 'RECEIVED_MOVIE_DETAILS';
export const receivedMovieDetails = (result) => ({
	type: RECEIVED_MOVIE_DETAILS,
	isFetching: false,
	movie: result
})

export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
export const requestMovieDetails = () => ({
	type: REQUEST_MOVIE_DETAILS,
	isFetching: true
});

export const REQUEST_MOVIE_CREDITS = 'REQUEST_MOVIE_CREDITS';
export const requestMovieCredits = () => ({
	type: REQUEST_MOVIE_CREDITS,
	isFetching: true
});

export const RECEIVED_MOVIE_CREDITS = 'RECEIVED_MOVIE_CREDITS';
export const receivedMovieCredits = (credits) => ({
	type: RECEIVED_MOVIE_CREDITS,
	credits
});

export const REQUEST_SEARCH_MOVIES = 'REQUEST_SEARCH_MOVIES';
export const requestSearchMovies = (query) => ({
	type: REQUEST_SEARCH_MOVIES,
	isFetching: true,
	query
});

export const RECEIVED_SEARCH_MOVIES = 'RECEIVED_SEARCH_MOVIES';
export const receivedSearchMovies = (results) => ({
	type: RECEIVED_SEARCH_MOVIES,
	results
});

export const ON_PAGE_CHANGE = 'ON_PAGE_CHANGE';
export const onPageChange = (page) => ({
	type: ON_PAGE_CHANGE,
	page: parseInt(page)
});

export const ON_EMPTY_QUERY = 'ON_EMPTY_QUERY';
export const onEmptyQuery = () => ({
	type: ON_EMPTY_QUERY
});

export function fetchNowPlaying(page = 1) {
	return function (dispatch) {
		dispatch(requestNowPlaying());
		const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
		return fetch(url)
			.then(response => response.json())
			.then(result => {
				dispatch(receivedNowPlaying(result));
			})
	}
}

export function fetchMovieById(id) {
	return function (dispatch) {
		dispatch(requestMovieDetails());
		const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
		return fetch(url)
			.then(response => response.json())
			.then(result => {
				dispatch(receivedMovieDetails(result));
			})
	}
}

export function fetchCredits(movieId) {
	return function (dispatch) {
		dispatch(requestMovieCredits());
		const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
		return fetch(url)
			.then(response => response.json())
			.then(result => {
				dispatch(receivedMovieCredits(result));
			})
	}
}


export function searchMovies(query,page=1) {
	return function (dispatch) {
		dispatch(requestSearchMovies(query));
		const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
		return fetch(url)
			.then(response => response.json())
			.then(result => {
				dispatch(receivedSearchMovies(result));
			});
	}
}

function getMovie(data){
	console.log(data);
}
import axios from 'axios';
import AppConfig from '../AppConfig';

const apiKey = AppConfig.TMDB_API_KEY;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: apiKey
};

export const images300Root = 'https://image.tmdb.org/t/p/w300/';

export const getTrending = () => axios.get('/trending/all/week').then((res) => res.data);

export const getMovieDetails = (movieId) => axios.get(`/movie/${movieId}`).then((res) => res.data);

export const getMovieCredits = (movieId) => axios.get(`/movie/${movieId}/credits`).then((res) => res.data);

export const getMovieReviews = (movieId) => axios.get(`/movie/${movieId}/reviews`).then((res) => res.data);

export const searchMovie = (query) => axios.get(`/search/movie?query=${query}`).then((res) => res.data);

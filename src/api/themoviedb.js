import axios from "axios";
import AppConfig from "../AppConfig";

const apiKey =  AppConfig.THEMOVIEDB_API_KEY;

axios.defaults.baseURL = "https://developers.themoviedb.org/3";

export const getTrending = () => axios.get(`/get-trending?api_key=${apiKey}`).then((res) => console.log(res, 'getTrending'));

// https://developers.themoviedb.org/3/trending/get-trending // список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies // поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details // запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits // запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews // запрос обзоров для страницы кинофильма.


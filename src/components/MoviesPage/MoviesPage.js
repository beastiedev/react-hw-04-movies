import React, { useState, useEffect } from 'react';
import { searchMovie } from '../../api/themoviedb';
import Search from '../Search/Search';
import qs from 'query-string';
import MoviesList from '../MoviesList/MoviesList';

const MoviesPage = ({ history, location }) => {
  const [ state, setState ] = useState({
    search: '',
    searchResult: []
  });

  const { filter } = qs.parse(location.search);

  const handleSearchMovie = () => {
    if (!filter) return;
    searchMovie(filter).then((data) => handleResults(data, filter));
  };

  const handleOnSubmit = (search) => {
    if (!search) return;
    searchMovie(search).then((data) => {
      setState({ ...state, search });
      handleResults(data, search);
    });
  };

  const handleResults = (data, search) => {
    setState({ ...state, searchResult: data.results });
    history.push({
      ...location,
      search: `filter=${search}`
    });
  };

  useEffect(handleSearchMovie, []);

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      <Search onSubmit={handleOnSubmit} />
      <MoviesList itemsList={state.searchResult} />
    </div>
  );
};

export default MoviesPage;

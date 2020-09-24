import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovie } from '../../api/themoviedb';
import Search from '../Search';
import qs from 'query-string';

const MoviesPage = ({ match, history, location }) => {
  const [ state, setState ] = useState({
    search: '',
    searchResult: []
  });
  const { url } = match;

  const handleOnSubmit = (search) =>
    searchMovie(search).then((data) => {
      setState({ ...state, searchResult: data.results });
      history.push({
        ...location,
        search: `filter=${search}`
      });
    });

  useEffect(
    () => {
      const { filter } = qs.parse(location.search);
      setState({ ...state, search: filter });
      if (state.search) {
        handleOnSubmit(state.search);
      }
    },
    [ state.search ]
  );

  return (
    <div className="movies-page">
      <h1>MoviesPage</h1>
      <Search onSubmit={handleOnSubmit} />
      <ul>
        {state.searchResult.map((item) => (
          <li key={item.id}>
            <Link to={`${url}/${item.id}`}>{item.title || item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;

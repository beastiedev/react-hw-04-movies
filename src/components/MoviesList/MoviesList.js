import React from 'react';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

const MoviesList = ({ itemsList }) => (
  <ul>{itemsList.map((item) => <MoviesListItem key={item.id} item={item} path={'/movies'} />)}</ul>
);

export default MoviesList;

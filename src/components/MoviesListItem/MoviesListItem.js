import React from 'react';
import { Link } from 'react-router-dom';
import ReleaseYear from '../ReleaseYear/ReleaseYear';

const MoviesListItem = ({ item, path }) => (
  <li key={item.id}>
    <Link to={`${path}/${item.id}`}>
      {item.title || item.name} <ReleaseYear date={item.release_date} />
    </Link>
  </li>
);

export default MoviesListItem;

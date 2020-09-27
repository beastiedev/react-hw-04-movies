import React, { useState, useEffect } from 'react';
import { getTrending } from '../../api/themoviedb';
import MoviesList from '../MoviesList/MoviesList';

const HomePage = () => {
  const [ trendingList, setTrendingList ] = useState([]);

  useEffect(() => {
    getTrending().then((data) => {
      setTrendingList(data.results);
    });
  }, []);

  return (
    <div className="home-page">
      <h1>Trending today</h1>
      <MoviesList itemsList={trendingList} />
    </div>
  );
};

export default HomePage;

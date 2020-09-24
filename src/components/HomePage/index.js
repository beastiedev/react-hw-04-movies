import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../../api/themoviedb';

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
      <ul>
        {trendingList.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetails, images300Root } from '../../api/themoviedb';
import Context from './MoviesDetailsPageContext';

import ReleaseYear from '../ReleaseYear/ReleaseYear';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';

const MovieDetailsPage = ({ match, history }) => {
  const { movieId } = match.params;
  const { url } = match;

  const [ movieDetails, setMovieDetails ] = useState({});
  const [ state ] = useState({ movieId, url });

  const handleClickBack = () => {
    history.goBack();
  };

  const handleMovieDetails = () => {
    getMovieDetails(movieId).then((data) => {
      setMovieDetails({ ...movieDetails, ...data });
    });
  };

  useEffect(handleMovieDetails, []);

  return (
    <div className="movie-details-page">
      <button className="back-button" onClick={handleClickBack}>
        {'< back'}
      </button>
      <div className="details-main">
        {movieDetails.poster_path ? (
          <img className="poster-image" src={`${images300Root}${movieDetails.poster_path}`} alt={movieDetails.title} />
        ) : (
          <p className="no-poster">no poster</p>
        )}

        <div className="overview">
          <h1>
            {movieDetails.title} <ReleaseYear date={movieDetails.release_date} />
          </h1>
          <p>User Score: {movieDetails.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>

          <h3>Genres</h3>
          <p>
            {movieDetails.genres &&
              movieDetails.genres.map((item) => <span key={item.id}>{item.name}&nbsp;&nbsp;&nbsp;</span>)}
          </p>
        </div>
      </div>

      <div className="more-info">
        <hr />
        <h4>Additional inpormation</h4>
        <ul>
          <li>
            <Link
              replace
              to={{
                pathname: `${url}/cast`,
                state: { movieId: movieId }
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              replace
              to={{
                pathname: `${url}/reviews`,
                state: { movieId: movieId }
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Context.Provider value={state}>
          <AdditionalInfo url={url} />
        </Context.Provider>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

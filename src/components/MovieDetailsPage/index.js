import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { getMovieDetails, images300Root } from '../../api/themoviedb';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = ({ match, history }) => {
  const { movieId } = match.params;
  const { url } = match;

  const [ movieDetails, setMovieDetails ] = useState({});

  const handleClickBack = () => {
    history.goBack();
  };

  const handleMovieDetails = () => {
    getMovieDetails(movieId).then((data) => {
      setMovieDetails({ ...movieDetails, ...data });
    });
  };

  useEffect(() => {
    handleMovieDetails();
  }, []);

  return (
    <div className="movie-details-page">
      <button onClick={handleClickBack}>{'< back'}</button>
      {movieDetails && (
        <div>
          {movieDetails.poster_path ? <img src={`${images300Root}${movieDetails.poster_path}`} alt={movieDetails.title} /> : <b>no poster</b>}

          <div>
            <h1>{movieDetails.title}</h1>
            <p>User Score: {movieDetails.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>

            <h3>Genres</h3>
            <p>
              {movieDetails.genres &&
                movieDetails.genres.map((item) => <span key={item.id}>{item.name}&nbsp;&nbsp;&nbsp;</span>)}
            </p>
          </div>
          <hr />
          <h4>Additional inpormation</h4>
          <ul>
            <li>
              <Link
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
          <div>
            <Switch>
              <Route path={`${url}/cast`} component={Cast} exact />
              <Route path={`${url}/reviews`} component={Reviews} exact />
              <Redirect to={url} />
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;

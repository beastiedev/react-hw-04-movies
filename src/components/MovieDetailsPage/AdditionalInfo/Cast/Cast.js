import React, { useEffect, useState, useContext } from 'react';
import { getMovieCredits, images300Root } from '../../../../api/themoviedb';
import Context from '../../MoviesDetailsPageContext';

const Cast = () => {
  const { movieId } = useContext(Context);
  const [ cast, setCast ] = useState([]);

  const handleCast = () => {
    getMovieCredits(movieId).then((data) => {
      setCast([ ...cast, ...data.cast ]);
    });
  };

  useEffect(handleCast, []);

  return (
    <div className="Cast">
      <h2>Cast</h2>
      <ul>
        {cast &&
          cast.map((item) => (
            <li key={item.id}>
              {item.profile_path ? (
                <img width="100" src={`${images300Root}${item.profile_path}`} alt={item.name} />
              ) : (
                <b>no image</b>
              )}
              <h4>{item.name}</h4>
              <p>Character: {item.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;

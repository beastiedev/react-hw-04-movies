import React, { useEffect, useState, useContext } from 'react';
import { getMovieReviews } from '../../../../api/themoviedb';
import Context from '../../MoviesDetailsPageContext';

const Reviews = () => {
  const { movieId } = useContext(Context);
  const [ reviews, setReviews ] = useState([]);

  const handleReviews = () => {
    getMovieReviews(movieId).then((data) => {
      setReviews([ ...reviews, ...data.results ]);
    });
  };

  useEffect(handleReviews, []);

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <ul>
        {reviews.length ? (
          reviews.map((item) => (
            <li key={item.id}>
              <h4>Author: {item.author}</h4>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <b>No reviews</b>
        )}
      </ul>
    </div>
  );
};

export default Reviews;

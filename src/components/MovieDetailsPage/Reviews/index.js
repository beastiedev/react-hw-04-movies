import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../../api/themoviedb';

const Reviews = ({ location }) => {
  const [ reviews, setReviews ] = useState([]);
  const { movieId } = location.state;
  console.log(location);
  const handleReviews = () => {
    getMovieReviews(movieId).then((data) => {
      setReviews([ ...reviews, ...data.results ]);
    });
  };

  useEffect(() => {
    handleReviews();
  }, []);

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <ul>
        {reviews.lenght &&
          reviews.map((item) => (
            <li key={item.id}>
              <h4>Author: {item.author}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        {!reviews.lenght && <b>No reviews</b>}
      </ul>
    </div>
  );
};

export default Reviews;

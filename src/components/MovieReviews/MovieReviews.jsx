import React, {useEffect, useState} from 'react';
import {getMovieReviews} from '../../services/movieApi.js';
import {useParams} from 'react-router-dom';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function getReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error)
      }
    }
    getReviews();
  }, [movieId]);

  return (
    reviews && reviews.length ? (
      <ul>
        {reviews.map(({id, author, content}) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <h4>We don't have any reviews for this movie</h4>
    )
  );
};

export default MovieReviews;

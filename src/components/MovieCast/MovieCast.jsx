import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getMovieCast} from "../../services/movieApi.js";
import defaultImg from '../../assets/defaultImg.png';


const MovieCast = () => {
  const [cast, setCast] = useState([])
  const {movieId} = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function getCast() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error)
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(({id, name, character, profile_path}) => (
          <li key={id}>
            {profile_path !== null ? (
              <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width="180"/>
            ) : (
              <img src={defaultImg} alt={name} width="180"/>
            )}
            <h4>{name}</h4>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieCast

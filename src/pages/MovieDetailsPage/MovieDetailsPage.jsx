import React, {useEffect, useState} from 'react';
import css from './MovieDetailsPage.module.css';
import {NavLink, Outlet, useLocation, useParams} from 'react-router-dom';
import {getMovieById} from '../../services/movieApi.js';
import Loader from '../../components/Loader/Loader.jsx';
// import {IoArrowBackOutline} from 'react-icons/io5';
import MovieInfo from "../MovieInfo/MovieInfo.jsx";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(false);
  const {movieId} = useParams();
  const location = useLocation();

  const goToBack = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;

    async function getMovies() {
      try {
        setLoad(true);
        const data = await getMovieById(movieId);
        setMovie(data);
        setLoad(false);
      } catch (error) {
        console.log(error)
      }
    };
    getMovies();
  }, [movieId]);

  return (
    <div>
      {load && <Loader/>}
      <div className={css.detail}>
        <NavLink to={goToBack} className={css.go_to_back}>
          Go back
        </NavLink>
      </div>
      {movie && (<MovieInfo movie={movie}/>)}
      <div>
        <hr/>
        <span>Additional information</span>
        <hr/>
        <NavLink to='cast'>Cast</NavLink>
        <br/>
        <NavLink to='reviews'>Reviews</NavLink>
        <Outlet/>
      </div>

    </div>
  );
};

export default MovieDetailsPage

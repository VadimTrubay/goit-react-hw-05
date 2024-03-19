import { NavLink, useLocation } from "react-router-dom";
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  console.log('movies: ', movies);
  const location = useLocation();

  return (
    <div>
      <h1>Trending today</h1>
      <ul className={css.movie_list}>
        {movies.map(({id, title, release_date, poster_path}) => (
          <li className={css.movie_list_item} key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={poster_path} />
              <h3 className={css.movie_list_title}>{title}</h3>
              <p className={css.movie_list_release}>{release_date}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({id, title, name}) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{from: location}}>{title ? title : name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

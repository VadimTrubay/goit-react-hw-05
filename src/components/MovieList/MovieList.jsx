import { NavLink } from "react-router-dom";
// import { useMemo } from "react";

const API_KEY = "03528b4ebd79ba28525f11768a074497";

const MovieList = ({ movies }) => {

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({id, title}) => (
          <li key={id}>
            {/* <NavLink to={}>{title}</NavLink> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

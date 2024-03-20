import {useEffect, useState} from "react";
import {getMovies} from "../../services/movieApi.js";
import MovieList from "../MovieList/MovieList.jsx";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => {
        setMovies(data.results);
      }
    );
  }, [])

  return (
    <>
      <MovieList movies={movies}/>
    </>
  );
};

export default Home;
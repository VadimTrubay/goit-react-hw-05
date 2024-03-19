import { useEffect, useState } from "react";
import { getMovies } from "../services/movieApi";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    getMovies().then((data) => {
      setMovies(data.data.results);
      setLoad(false);
    });
  }, []);

  return (
    <>
      {load && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default Home;

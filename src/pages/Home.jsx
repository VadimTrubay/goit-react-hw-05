import { useEffect, useState } from 'react';
import  { getMovies }  from '../services/movieApi';
import MovieList from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    getMovies().then(data => {
      setMovies(data.data.results);
    });
  }, []);
  
  return (
    <MovieList  movies={movies} />
  );
};

export default Home;

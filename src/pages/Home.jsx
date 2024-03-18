import { useEffect, useState } from 'react';
import getMovies from '../services/movieApi';
import MovieList from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
 
  return (
    <MovieList  movies={movies} />
  );
};

export default Home;

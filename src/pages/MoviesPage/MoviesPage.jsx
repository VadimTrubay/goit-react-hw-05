import React, {useState} from 'react';
import css from './MoviesPage.module.css';
import {getMovieSearch} from '../../services/movieApi.js';
import MovieList from '../MovieList/MovieList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import toast, {Toaster} from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) {
      toast.error('Please, enter your query');
      return;
    }
    setLoad(true);
    try {
      const data = await getMovieSearch(search);
      setMovies(data.results);
      if (!movies.length) {
        toast.error('Not found for your request ')
      }
      setSearch('');
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div>
      {load && <Loader/>}
      <form onSubmit={handleSearch} className={css.form}>
        <input
          type='text'
          placeholder='Search for a movie'
          className={css.input}
          value={search}
          onChange={handleChange}
        />
        <button type='submit' className={css.button}>
          Search
        </button>
      </form>
      {movies.length > 0 && <MovieList movies={movies}/>}
      <Toaster/>
    </div>
  );
};

export default Movies;


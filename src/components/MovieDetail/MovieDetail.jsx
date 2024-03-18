import { useEffect, useState } from 'react';
import  { getMovieById }  from '../../services/movieApi';
import { useParams, useLocation, Link  } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state.from ?? "/movies";
  console.log(location);

  useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovie(data.data);
    });
  }, [movieId]);
  const { id, title, release_date, overview, poster_path } = movie;
  return (
    <div>
         <Link to={backLinkHref}>
      <button>Go to back</button>
    </Link>
      <div>
        
      </div>

      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      {id}
      {title}<br />
      {release_date} <br />
      {overview}<br />
      {/* {genres[0].id}<br /> */}

    </div>
  );
};

export default MovieDetail
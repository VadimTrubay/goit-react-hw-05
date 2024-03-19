import { useEffect, useState } from "react";
import { getMovieById } from "../../services/movieApi";
import { useParams, useLocation, Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import MovieCard from "../MovieCard/MovieCard";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const [load, setLoad] = useState(false);

  const backLinkHref = location.state.from ?? "/movies";

  useEffect(() => {
    setLoad(true);
    getMovieById(movieId).then((data) => {
      setMovie(data.data);
      setLoad(false);
    });
    
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>
        <button>Go to back</button>
      </Link>
      {load && <Loader />}
      {<MovieCard movie={movie} />}
    </div>
  );
};

export default MovieDetail;

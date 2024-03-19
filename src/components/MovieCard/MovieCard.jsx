const MovieCard = ({ movie }) => {
  const { id, title, release_date, overview, poster_path } = movie;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={poster_path} />
      {id}
      {title}
      <br />
      {release_date} <br />
      {overview}
      <br />
    </div>
  );
};

export default MovieCard;

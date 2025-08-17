import '../styles/MovieView.css'

const MovieView = ({ movie, watchlist, onToggleWatch }) => {
  
  const inList = watchlist.some(x => x.imdbID === movie.imdbID);

  return (
    <article>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Ratings:</strong> {movie.Ratings?.map(r => `${r.Source} ${r.Value}`).join(" · ")}</p>
        <button onClick={() => onToggleWatch(movie)}>{inList ? "Remove" : "Watch"}</button>
      </div>
    </article>
  );
};

export default MovieView;

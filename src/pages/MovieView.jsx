import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../utils/api';
import '../styles/MovieView.css';
const MovieView = ({ watchlist = [], onToggleWatch }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const inList = movie && watchlist.some(x => x.imdbID === movie.imdbID);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMovieById(id);
        if (result && result.Response === 'True') {
          setMovie(result);
        } else {
          setError(result?.Error || 'Movie not found');
        }
      } catch (err) {
        setError('Failed to load movie');
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);
  if (loading) return <div className="movie-view-loading">Loading movie...</div>;
  if (error) return <div className="movie-view-error">{error}</div>;
  if (!movie) return null;
  return (
    <article className="movie-view">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} alt={movie.Title} />
      <div className="movie-details">
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Ratings:</strong> {movie.Ratings?.map(r => `${r.Source}: ${r.Value}`).join(" · ")}</p>
         <button onClick={() => onToggleWatch(movie)}>
         {inList ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </article>
  );
};
export default MovieView;







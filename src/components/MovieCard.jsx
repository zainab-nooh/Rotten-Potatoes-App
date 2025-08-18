import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieCard.css'

export default function MovieCard({ movie, movieDBObj, onToggleWatch }) {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster" onClick={handleClick}>
        {movie.poster && !imageError ? (
          <img 
            src={movie.poster} 
            alt={movie.title}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="poster-placeholder" onClick={handleClick}>
            <span className="placeholder-text">No Image</span>
          </div>
        )}
      </div>
      
      <div className="movie-info" onClick={handleClick}>
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-year">{movie.year}</span>
          {movie.type && (
            <span className="movie-type">{movie.type}</span>
          )}
        </div>
      </div>
      {onToggleWatch ? <button onClick={() => onToggleWatch(movieDBObj)}>Remove</button> : <></>}
    </div>
  );
}
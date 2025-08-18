import React from 'react';
import MovieCard from '../components/MovieCard'; // ✅ use the same card component
import '../styles/Watchlist.css';

const Watchlist = ({ watchlist, onToggleWatch }) => {
  return (
    <div className="watchlist-container">
      <h1>Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <div key={movie.imdbID} className="watchlist-card-wrapper">
              <MovieCard
                movie={{
                  id: movie.imdbID,
                  title: movie.Title,
                  year: movie.Year,
                  poster: movie.Poster !== 'N/A' ? movie.Poster : null,
                  type: movie.Type,
                }}
                movieDBObj={movie}
                onToggleWatch={onToggleWatch}
              />
              {/* <button onClick={() => onToggleWatch(movie)}>Remove</button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;

import React from 'react';

const Watchlist = ({ watchlist, onToggleWatch }) => {
  return (
    <div>
      <h1>Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        watchlist.map((movie) => (
          <article key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              <h2>{movie.Title}</h2>
              <p>{movie.Type} • {movie.Year}</p>
              <button onClick={() => onToggleWatch(movie)}>Remove</button>
            </div>
          </article>
        ))
      )}
    </div>
  );
};

export default Watchlist;

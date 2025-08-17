import React, { useState } from "react";
import { loadWatchlist, toggleWatch } from "../App.jsx";

const Watchlist = () => {

    //add to app.jsx
    
// export function loadWatchlist() {
//   try { return JSON.parse(localStorage.getItem(KEY)) ?? []; }
//   catch { return []; }
// }

// export function saveWatchlist(list) {
//   localStorage.setItem(KEY, JSON.stringify(list));
// }
// const [watch, setWatch] = useState(loadWatchlist());

  const handleToggleWatch = (item) => {
    const updated = toggleWatch(watch, item);
    setWatch(updated);
  };

  return (
    <div>
      <h1>Watchlist</h1>
      {watch.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        watch.map(w => (
          <article key={w.id || w.Title}>
            <img src={w.Poster} alt={w.Title} />
            <div>
              <h2>{w.Title}</h2>
              <p>{w.Type} • {w.Year}</p>
              <button onClick={() => handleToggleWatch(w)}>Remove</button>
            </div>
          </article>
        ))
      )}
    </div>
  );
};

export default Watchlist;

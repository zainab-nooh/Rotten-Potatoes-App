// Utility functions for localStorage operations

const WATCHLIST_KEY = 'movieWatchlist';

// export function getWatchlist() {
//   try {
//     const stored = localStorage.getItem(WATCHLIST_KEY);
//     return stored ? JSON.parse(stored) : [];
//   } catch (error) {
//     console.error('Error reading watchlist from localStorage:', error);
//     return [];
//   }
// }

// export function saveWatchlist(watchlist) {
//   try {
//     localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
//     return true;
//   } catch (error) {
//     console.error('Error saving watchlist to localStorage:', error);
//     return false;
//   }
// }

// export function addToWatchlist(movie) {
//   try {
//     const watchlist = getWatchlist();
//     const movieData = {
//       id: movie.id,
//       title: movie.title,
//       year: movie.year,
//       poster: movie.poster,
//       type: movie.type,
//       director: movie.director || '',
//       genre: movie.genre || '',
//       addedAt: new Date().toISOString()
//     };
    
//     // Check if already exists
//     const exists = watchlist.some(item => item.id === movie.id);
//     if (exists) {
//       return { success: false, message: 'Movie already in watchlist' };
//     }
    
//     watchlist.push(movieData);
//     const saved = saveWatchlist(watchlist);
    
//     return saved 
//       ? { success: true, message: 'Added to watchlist' }
//       : { success: false, message: 'Failed to save' };
//   } catch (error) {
//     console.error('Error adding movie to watchlist:', error);
//     return { success: false, message: 'Error occurred' };
//   }
// }

// export function removeFromWatchlist(movieId) {
//   try {
//     const watchlist = getWatchlist();
//     const filtered = watchlist.filter(movie => movie.id !== movieId);
//     const saved = saveWatchlist(filtered);
    
//     return saved 
//       ? { success: true, message: 'Removed from watchlist' }
//       : { success: false, message: 'Failed to save' };
//   } catch (error) {
//     console.error('Error removing movie from watchlist:', error);
//     return { success: false, message: 'Error occurred' };
//   }
// }

// export function isInWatchlist(movieId) {
//   try {
//     const watchlist = getWatchlist();
//     return watchlist.some(movie => movie.id === movieId);
//   } catch (error) {
//     console.error('Error checking watchlist:', error);
//     return false;
//   }
// }

// export function clearWatchlist() {
//   try {
//     localStorage.removeItem(WATCHLIST_KEY);
//     return { success: true, message: 'Watchlist cleared' };
//   } catch (error) {
//     console.error('Error clearing watchlist:', error);
//     return { success: false, message: 'Failed to clear watchlist' };
//   }
// }

// // Get movie preferences from watchlist for recommendations
// export function getWatchlistPreferences() {
//   try {
//     const watchlist = getWatchlist();
    
//     const preferences = {
//       genres: new Set(),
//       years: new Set(),
//       directors: new Set(),
//       types: new Set()
//     };
    
//     watchlist.forEach(movie => {
//       if (movie.genre) preferences.genres.add(movie.genre);
//       if (movie.year) preferences.years.add(movie.year);
//       if (movie.director) preferences.directors.add(movie.director);
//       if (movie.type) preferences.types.add(movie.type);
//     });
    
//     return {
//       genres: Array.from(preferences.genres),
//       years: Array.from(preferences.years),
//       directors: Array.from(preferences.directors),
//       types: Array.from(preferences.types),
//       count: watchlist.length
//     };
//   } catch (error) {
//     console.error('Error getting watchlist preferences:', error);
//     return {
//       genres: [],
//       years: [],
//       directors: [],
//       types: [],
//       count: 0
//     };
//   }
// }

export function loadWatchlist() {
  try {
    return JSON.parse(localStorage.getItem(WATCHLIST_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function saveWatchlist(list) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
}

export function toggleWatch(watchlist, movie) {
  const exists = watchlist.some(item => item.imdbID === movie.imdbID);
  if (exists) {
    return watchlist.filter(item => item.imdbID !== movie.imdbID);
  } else {
    return [...watchlist, movie];
  }
}
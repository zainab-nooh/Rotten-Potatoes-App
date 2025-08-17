import { useState, useEffect } from 'react';
import { searchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import '../styles/ForYou.css'
// import LoadingSpinner from '../components/LoadingSpinner';

export default function ForYou() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingRecommended, setLoadingRecommended] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies();
    fetchRecommendedMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      setLoadingTrending(true);
      // Get trending movies by searching for recent popular terms
      const trendingTerms = ['Marvel', 'Batman', 'Star Wars', 'action'];
      const randomTerm = trendingTerms[Math.floor(Math.random() * trendingTerms.length)];
      
      const result = await searchMovies(randomTerm, 1);
      if (result.items) {
        // Take first 6 movies for trending section
        setTrendingMovies(result.items.slice(0, 6));
      }
    } catch (err) {
      setError('Failed to fetch trending movies');
    } finally {
      setLoadingTrending(false);
    }
  };

  const fetchRecommendedMovies = async () => {
    try {
      setLoadingRecommended(true);
      
      // Show general recommendations from different genres
      const genres = ['thriller', 'drama', 'comedy', 'horror', 'romance'];
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
      
      const result = await searchMovies(randomGenre, 1);
      if (result.items) {
        setRecommendedMovies(result.items.slice(0, 6));
      }
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      // Fallback to drama movies
      const result = await searchMovies('drama', 1);
      if (result.items) {
        setRecommendedMovies(result.items.slice(0, 6));
      }
    } finally {
      setLoadingRecommended(false);
    }
  };



  const refreshTrending = () => {
    fetchTrendingMovies();
  };

  const refreshRecommended = () => {
    fetchRecommendedMovies();
  };

  if (error) {
    return (
      <div className="for-you-page">
        <div className="container">
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => {
              setError(null);
              fetchTrendingMovies();
              fetchRecommendedMovies();
            }}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="for-you-page">
      <div className="container">
        <h1 className="page-title">For You</h1>

        {/* Trending Movies Section */}
        <section className="movie-section">
          <div className="section-header">
            <h2 className="section-title">🔥 Trending Now</h2>
            <button 
              className="refresh-btn"
              onClick={refreshTrending}
              disabled={loadingTrending}
            >
              {loadingTrending ? '...' : 'Refresh'}
            </button>
          </div>

          {loadingTrending ? (
            <div className="loading-container">
              <div className="simple-loading">Loading trending movies...</div>
            </div>
          ) : (
            <div className="movies-horizontal">
              {trendingMovies.map((movie) => (
                <MovieCard 
                  key={movie.imdbID}
                  movie={{
                    id: movie.imdbID,
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster !== 'N/A' ? movie.Poster : null,
                    type: movie.Type
                  }}
                />
              ))}
            </div>
          )}
        </section>

        {/* Recommended Movies Section */}
        <section className="movie-section">
          <div className="section-header">
            <h2 className="section-title">✨ You Might Like</h2>
            <button 
              className="refresh-btn"
              onClick={refreshRecommended}
              disabled={loadingRecommended}
            >
              {loadingRecommended ? '...' : 'Refresh'}
            </button>
          </div>

          <p className="section-description">
            Discover movies from different genres
          </p>

          {loadingRecommended ? (
            <div className="loading-container">
              <div className="simple-loading">Loading recommendations...</div>
            </div>
          ) : (
            <div className="movies-horizontal">
              {recommendedMovies.map((movie) => (
                <MovieCard 
                  key={movie.imdbID}
                  movie={{
                    id: movie.imdbID,
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster !== 'N/A' ? movie.Poster : null,
                    type: movie.Type
                  }}
                />
              ))}
            </div>
          )}

          {!loadingRecommended && recommendedMovies.length === 0 && (
            <div className="no-recommendations">
              <p>No recommendations available at the moment.</p>
              <button onClick={refreshRecommended}>
                Try Again
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
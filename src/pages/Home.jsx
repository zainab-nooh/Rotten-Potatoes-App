import { useState, useEffect } from 'react';
import { searchMovies } from '../utils/api';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import '../styles/Home.css'

// import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Load popular movies on initial load
  useEffect(() => {
    handleSearch('popular', 1);
  }, []);

  const handleSearch = async (term, page = 1) => {
    if (!term.trim() && term !== 'popular') return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Use a default search term for popular movies
      const searchQuery = term === 'popular' ? 'movie' : term;
      const result = await searchMovies(searchQuery, page);
      
      if (result.error) {
        setError(result.error);
        setMovies([]);
      } else {
        setMovies(result.items || []);
        setTotalResults(result.total || 0);
        setCurrentPage(page);
        setSearchTerm(term);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalResults / 10)) {
      handleSearch(searchTerm, newPage);
    }
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="home-page">
      <div className="container">
        <h1 className="page-title">Discover Movies</h1>
        
        <SearchBar 
          onSearch={(term) => handleSearch(term, 1)}
          placeholder="Search for movies..."
        />

        {loading && (
          <div className="loading-container">
            <div className="simple-loading">Loading movies...</div>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button 
              className="retry-btn"
              onClick={() => handleSearch(searchTerm || 'popular', 1)}
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="results-info">
              <p>
                {totalResults > 0 ? (
                  `Found ${totalResults} results ${searchTerm !== 'popular' ? `for "${searchTerm}"` : ''}`
                ) : (
                  'No movies found'
                )}
              </p>
            </div>

            <div className="movies-grid">
              {movies.map((movie) => (
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

            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="page-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                
                <span className="page-info">
                  Page {currentPage} of {totalPages}
                </span>
                
                <button 
                  className="page-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {!loading && !error && movies.length === 0 && searchTerm && searchTerm !== 'popular' && (
          <div className="no-results">
            <h3>No movies found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
}
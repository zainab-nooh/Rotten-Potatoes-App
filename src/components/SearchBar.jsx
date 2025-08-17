import { useState } from 'react';

export default function SearchBar({ onSearch, placeholder = "Search movies..." }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    // Don't automatically search when clearing, let the parent component handle it
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
        />
        
        {searchTerm && (
          <button 
            type="button" 
            className="clear-btn"
            onClick={handleClear}
          >
            ✕
          </button>
        )}
        
        <button 
          type="submit" 
          className="search-btn"
          disabled={!searchTerm.trim()}
        >
          🔍
        </button>
      </div>
    </form>
  );
}
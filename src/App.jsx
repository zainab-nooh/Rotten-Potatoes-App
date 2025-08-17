
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
import MovieView from './pages/MovieView';
import Watchlist from './pages/Watchlist';


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { loadWatchlist, saveWatchlist, toggleWatch } from './utils/localStorage';
import Home from './pages/Home';
import ForYou from './pages/ForYou';

function App() {
  const [watchlist, setWatchlist] = useState(loadWatchlist());

  useEffect(() => {
    saveWatchlist(watchlist);
  }, [watchlist]);

  const handleToggleWatch = (movie) => {
    const updated = toggleWatch(watchlist, movie);
    setWatchlist(updated);
  };  

  return (
    
    <Router>
      <div className="App">
        {/* Navigation will be shown on all pages */}
        <Navigation />
        {/* Main content area */}
        <main className="main-content">
          <Routes>
            {/* Your pages */}
            <Route path="/" element={<Home />} />
            <Route path="/foryou" element={<ForYou />} />
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} onToggleWatch={handleToggleWatch}/>} />
            <Route path="/movie/:id" element={<MovieView watchlist={watchlist} onToggleWatch={handleToggleWatch}/>} />

            {/* 404 route */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />                             
      </div>
    </Router>
  );
}
export default App;







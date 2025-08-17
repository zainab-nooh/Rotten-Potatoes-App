
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
// import Watchlist from './pages/Watchlist'
// import MovieView from './pages/MovieView'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ForYou from './pages/ForYou';

function App() {
  
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
            {/* <Route path="/watchlist" element={<Watchlist />} /> */}
            {/* <Route path="/movie" element={<MovieView />} /> */}

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







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
            {/* Redirect root to home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Your pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/for-you" element={<ForYou />} />
            
            {/* 404 route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>

        {/* Footer will be shown on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
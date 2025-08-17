
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'

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
            <Route path="/home" element={<Home />} />
            <Route path="/for-you" element={<ForYou />} />
            {/* 404 route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />                             
      </div>
    </Router>
  );
}
export default App;







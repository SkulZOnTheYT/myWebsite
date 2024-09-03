import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Profile from './profile';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center mb-4">
          <Link to="/" className="text-xl font-bold">Website Saya</Link>
          <ul className="flex space-x-4">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/profile">Profil</Link></li>
          </ul>
        </nav> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
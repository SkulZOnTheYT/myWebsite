import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Profile from './list';
import LinktreePage from "./LinkTree";

function App() {
  return (
    <Router>
      <div className="container bg-white mx-auto p-4">
        <nav className="flex justify-between items-center mb-4">
          <Link to="/" className="text-xl font-bold">VinKev Craft</Link>
          <ul className="flex space-x-4">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/link">Link</Link></li>
          </ul>
        </nav> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/list" element={<Profile />} />
          <Route path="/link" element={<LinktreePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import '../Styling/Header.css';
import falconsDen from '../assets/FalconsLogo.webp'; 


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const esportMatch = location.pathname.match(/^\/esports\/([^\/]+)/);
    const esport = esportMatch ? esportMatch[1] : null;

  const handleGoToStandings = () => {
    if (esport) {
      navigate(`/esports/${esport}/standings`);
    } else {
      alert('No esport selected'); 
    }
  };

  return (
    <header className="header">
      <Link to={`/home`} className="logo-link">
        <div className="logo">
          <img src={falconsDen} alt="Falcons Logo" className="logo-image" />
          <h1 className="team-name">Falcons</h1>
        </div>
      </Link>
      <nav className="nav">
        <div className="nav-links">
          {location.pathname !== '/home' && (
            <button onClick={() => window.history.back()} className="nav-button">Back</button>
          )}
          <a href="#about" className="nav-button">About</a>
          {location.pathname !== '/home' && (
            <a href="#team" className="nav-button">Team</a>
          )}
          {location.pathname !== '/home' && (
            <a href="#schedule" className="nav-button">Schedule</a>
          )}
          
          {location.pathname === '/home' && (
            <a href="#contact" className="nav-button">Contact</a>
          )}
          
          {location.pathname !== '/home' &&  (
            <button onClick={handleGoToStandings} className="nav-button">
              View Standings
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/HomePage.css'; 
import csgo from '../assets/csgo.webp';
import valorant from '../assets/valorant.webp'; 
import apex from '../assets/apexlegends.webp';
import overwatch from '../assets/overwatch.png';
import rocketleague from '../assets/rocketleague.webp';


const HomePage = () => {
    
    const navigate = useNavigate();

    const esports = [
        { name: 'Apex', image: apex, path: '/esports/apexlegends' },
        //  Hide until esports team reinstated 
        // { name: 'League of Legends', image: '/images/leagueoflegends.jpg', path: '/esports/league-of-legends' },
        { name: 'Valorant', image: valorant, path: '/esports/valorant' },
        { name: 'CS:GO', image: csgo, path: '/esports/csgo' },
        { name: 'Overwatch', image: overwatch, path: '/esports/overwatch' },
        { name: 'Rocket League', image: rocketleague, path: '/esports/rocket-league' },
    ]; 

    return (
        
        <div className="homepage">
            
            <div className="horizontal-gallery">
                {esports.map((game) => (
                    <div 
                        key={game.name} 
                        className="horizontal-card" 
                        onClick={() => navigate(game.path)}
                    >
                        <img src={game.image} alt={game.name} />
                        
                        <div className="overlay">{game.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;

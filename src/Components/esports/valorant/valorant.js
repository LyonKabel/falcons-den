import React from 'react';
import { Link } from 'react-router-dom';
import ValorantTeam from './ValorantRoster.js';
import '../../../Styling/gameCSS/ApexLegends.css'; 

const Valorant = () => {
  return (
    <div className="Valorant-container">
      <section id="about" className="about-section">
        <h1>Valorant Esports</h1>
        <p>Welcome to the Falcons Valorant esports page!</p>
        <p>
          The Falcons Valorant team is dedicated to competing at the highest level in the esports scene.
          Our players are passionate, skilled, and committed to excellence in every match.
        </p>
        <h2>Watch our matches on ALGS YouTube and Twitch!</h2>
      </section>

      <section id="schedule" className="schedule-section">
        <h2>Upcoming Matches</h2>
        <p>Here’s our upcoming match schedule:</p>

        <div className="match-card">
          <a href="https://liquipedia.net/apexlegends/Apex_Legends_Global_Series/2025/Split_1/Pro_League/Americas/Regular_Season" target="_blank" rel="noopener noreferrer">
            <h3>Pro League - Round 2: A vs B</h3>
          </a>
          <p>Date: May 24, 2025</p>
          <p>Time: 17:00 CDT</p>
        </div>

        <div className="match-card">
          <a href="https://liquipedia.net/apexlegends/Apex_Legends_Global_Series/2025/Split_1/Pro_League/Americas/Regular_Season" target="_blank" rel="noopener noreferrer">
            <h3>Pro League - Round 2: A vs C</h3>
          </a>
          <p>Date: May 25, 2025</p>
          <p>Time: 17:00 CDT</p>
        </div>
      </section>

      <section id="team" className="team-section">
        <h2>Team Roster</h2>
        <p>              https://liquipedia.net/counterstrike/Team_Falcons</p>
        <div className="team-roster">
          {Object.entries(ValorantTeam).map(([key, player]) => (
            <div key={player.IGN || key} className="player-card">
              <Link to={`/esports/apexlegends/${player.IGN}`} className="player-link">
                <img src={player.img} alt={player.name} className="player-image" />
                <h3>{player.IGN || player.name}</h3>
                <p><strong>Name:</strong> {player.name}</p>
                <p><strong>Age:</strong> {player.age}</p>
                {player.role && <p><strong>Role:</strong> {player.role}</p>}
                {player.description && <p>{player.description}</p>}
              </Link>
            </div>
            
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>Have questions or inquiries? Reach out to us:</p>
        <ul>
          <li>Email: <a href="mailto:contact@falconsden.com">contact@falconsden.com</a></li>
          <li>Twitter: <a href="https://twitter.com/falconsden" target="_blank" rel="noopener noreferrer">@falconsden</a></li>
          <li>Discord: <a href="https://discord.gg/falconsden" target="_blank" rel="noopener noreferrer">Join our Discord</a></li>
        </ul>
      </section>
      
    </div>
  );
};

export default Valorant;


import React from 'react';
import { useParams } from 'react-router-dom';
import ValorantTeam from '../valorant/ValorantRoster';
import '../../../Styling/gameCSS/PlayerProfileCSGO.css'; 


const PlayerProfile = () => {
  const { IGN } = useParams();
  const player = Object.values(ValorantTeam).find(
    (p) => p.IGN.toLowerCase() === IGN.toLowerCase()
  );

  if (!player) {
    console.log("Player not found", { IGN }, player, ValorantTeam);
    return <h2 className="not-found">Player not found</h2>;
  }

  return (
    <div className="passport-container">
      <div className="passport-card">
        <div className="passport-top">
          <h1 className="passport-title">PLAYER PASSPORT</h1>
        </div>

        <div className="passport-header">
          <img src={player.img} alt={player.name} className="passport-photo" />
          <div className="passport-basic-info">
            <h2>{player.IGN || player.name}</h2>
            <p><strong>Name:</strong> {player.name}</p>
            <p><strong>Age:</strong> {player.age}</p>
            {player.role && <p><strong>Role:</strong> {player.role}</p>}
          </div>
        </div>

        {player.description && (
          <div className="passport-description">
            <p>{player.description}</p>
          </div>
        )}

        <div className="passport-socials">
          {player.twitch && (
            <a href={player.twitch} target="_blank" rel="noopener noreferrer" className="social-link twitch">Twitch</a>
          )}
          {player.youtube && (
            <a href={player.youtube} target="_blank" rel="noopener noreferrer" className="social-link youtube">YouTube</a>
          )}
          {player.twitter && (
            <a href={player.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">Twitter</a>
          )}
        </div>

        <div className="passport-footer">
          <a
            href={player.career}
            target="_blank"
            rel="noopener noreferrer"
            className="career-link"
          >
            View Career
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
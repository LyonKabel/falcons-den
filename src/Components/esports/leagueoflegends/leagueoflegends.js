import React from 'react';
import '../../../Styling/gameCSS/LeagueOfLegends.css';




const LeagueOfLegends = () => {

  const leagueoflegendsTeam = {
    Top: {
      name: 'Player1',
      age: 25,
      img: '/images/gamesImage/leagueoflegends/roster/zven.jpg',
      career: 'https://liquipedia.net/apexlegends/ImperialHal'
    },
    Jungle: {
      name: 'Player2',
      age: 24,
      img: '/images/gamesImage/leagueoflegends/roster/zven.jpg',
      career: 'https://liquipedia.net/apexlegends/ImperialHal'
    },
    Mid: {
      name: 'Player3',
      age: 23,
      img: '/images/gamesImage/leagueoflegends/roster/zven.jpg',
      career: 'https://liquipedia.net/apexlegends/ImperialHal'
    },
    ADC: {
      name: 'Player4',
      age: 27,
      img: '/images/gamesImage/leagueoflegends/roster/zven.jpg',
      career: 'https://liquipedia.net/leagueoflegends/Zven'
    },
    Support: {
      name: 'Player5',
      age: 21,
      img: '/images/gamesImage/leagueoflegends/roster/zven.jpg',
      career: 'https://liquipedia.net/apexlegends/ImperialHal'
    },
    Coach: {
      name: 'Coach',
      age: 30,
      img: '/images/coach.jpg',
      career: 'https://liquipedia.net/apexlegends/ImperialHal'
    }
  };




  return (
    <div style={{ padding: '2rem' }}>
      <h1>Apex Legends Esports</h1>
      <p>Welcome to the Falcons League of Legends esports page!</p>
      <h2>Team Roster</h2>
      <div className="team-roster">
        {Object.entries(leagueoflegendsTeam).map(([role, player]) => (
          <div key={role} className="player-card">
            <img src={player.img} alt={player.name} className="player-image" />
            <h3>{role}</h3>
            <p>Name: {player.name}</p>
            <p>Age: {player.age}</p>
            <a href={player.career} target="_blank" rel="noopener noreferrer">Career</a>
          </div>
        ))}
      </div>
      {/* You can add highlights, tournaments, teams, or news here */}
    </div>

);
};

export default LeagueOfLegends;

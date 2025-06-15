import { Routes, Route } from 'react-router-dom'; 
import React from 'react';
import HomePage from '../../HomePage.js';
//Should be fixed
import Overwatch from '../../esports/overwatch/overwatch.js';
import ApexLegends from '../../esports/apex/apexlegends.js';
import LeagueOfLegends from '../../esports/leagueoflegends/leagueoflegends.js';
import Valorant from '../../esports/valorant/valorant.js';
import CSGO from '../../esports/csgo/csgo.js';
import RocketLeague from '../../esports/rocketleague/rocketleague.js';
import ApexStandings from '../apex/ApexStandings.js';
import PlayerProfile from '../../esports/apex/PlayerProfileApex.js';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/esports/apexlegends" element={<ApexLegends />} />
      <Route path="/esports/overwatch" element={<Overwatch />} />
      <Route path="/esports/league-of-legends" element={<LeagueOfLegends />} />
      <Route path="/esports/valorant" element={<Valorant />} />
      <Route path="/esports/csgo" element={<CSGO />} />
      <Route path="/esports/rocket-league" element={<RocketLeague />} />
      <Route path="/esports/:esport/standings" element={<ApexStandings />} />
      <Route path="/esports/apexlegends/:IGN" element={<PlayerProfile />} />
      
      
      
      
    </Routes>
  );
}

export default Routing;

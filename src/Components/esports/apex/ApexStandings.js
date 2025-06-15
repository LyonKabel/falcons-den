import React from "react";
import apexStandingsData from "../StandindsData";
import "../../../Styling/gameCSS/Standings/ApexStandings.css";

function ApexStandings() {
  const standings = [...apexStandingsData.PROLEAGUE].sort(
    (a, b) => b.TotalPoints - a.TotalPoints
  );

  const getRankClass = (index) => {
    if (index === 0) return "gold-row";
    if (index === 1) return "silver-row";
    if (index === 2) return "bronze-row";
    return "";
  };

  const getFalconsName = (team) => {
    if (team === "Falcons") return "falcons-row";
    return "";
  };

  return (
    <div className="standings-container">
      <h2 className="standings-title">Apex Legends PROLEAGUE Standings</h2>
      <div className="table-wrapper">
        <table className="standings-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Total Points</th>
              <th>Round 1: A vs B</th>
              <th>Round 1: B vs C</th>
              <th>Round 1: A vs C</th>
              <th>Round 2: A vs B</th>
              <th>Round 2: A vs C</th>
              <th>Round 2: B vs C</th>
              <th>Round 3: A vs B</th>
              <th>Round 3: A vs C</th>
              <th>Round 3: B vs C</th>
            </tr>
          </thead>
          <tbody>
            {standings.map(({ team, TotalPoints, ...rounds }, index) => (
              <tr key={team} className={getRankClass(index)}>
                <td>{index + 1}</td>
                <td className={getFalconsName(team)}>{team}</td>
                <td>{TotalPoints}</td>
                <td>{rounds["Round 1: A vs B"]}</td>
                <td>{rounds["Round 1: B vs C"]}</td>
                <td>{rounds["Round 1: A vs C"]}</td>
                <td>{rounds["Round 2: A vs B"]}</td>
                <td>{rounds["Round 2: A vs C"]}</td>
                <td>{rounds["Round 2: B vs C"]}</td>
                <td>{rounds["Round 3: A vs B"]}</td>
                <td>{rounds["Round 3: A vs C"]}</td>
                <td>{rounds["Round 3: B vs C"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApexStandings;


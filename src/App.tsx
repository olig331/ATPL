import React, { useState } from 'react';
import { Selector } from './components/Selector';
import { TeamHighlights } from './components/TeamHighlights';
import { TeamFixtures } from './components/TeamFixtures';
import { Table } from './components/Table'
import { TeamNews } from './components/TeamNews';
import './style/style.css';
import { BettingOdds } from './components/BettingOdds';
import { MatchStats } from './components/MatchStats';

export const App: React.FC = () => {

  const [team, setteam] = useState<string>("");
  const [showStats, setshowStats] = useState<boolean>(false);
  const [homeTeam, sethomeTeam] = useState<string>("");
  const [awayTeam, setawayTeam] = useState<string>("");
  
  const [results, setresults] = useState<FixturesObj[]>([]);

  const teamSelect = (input: string): void => {
    setteam(input)
  }

  const passResultstoStatsPage = (results:FixturesObj[]) =>{
    setresults(results)
  }

  const toggleStatsPage = (homeTeam: string, awayTeam: string): void => {
    if (!showStats) {
      sethomeTeam(homeTeam);
      setawayTeam(awayTeam);
    }
    showStats ? setshowStats(false) : setshowStats(true);
  }

  return (
    <div>
      <Selector
        teamSelector={teamSelect}
      />
      {team === "" || showStats === true ? "" : <><TeamHighlights
        chosenTeam={team}
      />
        <TeamFixtures
          chosenTeam={team}
          toggleStatsPage={toggleStatsPage}
          passResultstoStatsPage={passResultstoStatsPage}
        />
        <Table
          chosenTeam={team}
        /></>}
      <TeamNews
        chosenTeam={team}
      />
      {showStats
        ? <>
          <BettingOdds
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            toggleStatsPage={toggleStatsPage}
          />
          <MatchStats
            chosenTeam={team}
            results={results}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
          />
        </>
        : null}
    </div>
  );
}


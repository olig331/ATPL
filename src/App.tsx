import React,{useState} from 'react';
import {Selector} from './components/Selector';
import {TeamHighlights} from './components/TeamHighlights';
import {TeamFixtures } from './components/TeamFixtures';
import {Table} from './components/Table'
import {TeamNews} from './components/TeamNews';
import './style/style.css';


export const App: React.FC = () =>{

  const [team, setteam] = useState<string>("");

  const teamSelect = (input:string):void =>{
    setteam(input)
  }

  return (
    <div>
      <Selector 
        teamSelector={teamSelect}
      />
      {team === ""?"":<><TeamHighlights 
        chosenTeam={team}
      />
      <TeamFixtures 
        chosenTeam={team}
      /></>}
      <Table 
        chosenTeam={team}
      />
      <TeamNews 
        chosenTeam={team}
      />
    </div>
  );
}


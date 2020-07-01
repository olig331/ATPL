import React,{useState} from 'react';
import {Selector} from './components/Selector';
import {TeamHighlights} from './components/TeamHighlights';
import './style/style.css';


export const App: React.FC = () =>{

  const [team, setteam] = useState<string>("");

  function teamSelect(input:string):void{
    setteam(input)
  }

  return (
    <div>
      <Selector 
        teamSelector={teamSelect}
      />
      <TeamHighlights 
        chosenTeam={team}
      />
    </div>
  );
}


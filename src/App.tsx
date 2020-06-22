import React,{useState} from 'react';
import {Selector} from './components/Selector';
import './style/style.css';

export const App: React.FC = () =>{

  const [team, setteam] = useState("");

  function teamSelect(input:string):void{
    setteam(input)
  }

  return (
    <div>
      <Selector 
        teamSelector={teamSelect}
      />
    </div>
  );
}


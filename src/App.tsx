import React,{useState} from 'react';
import {Selector } from './components/Selector';
import './style/style.css';

export const App: React.FC = () =>{

  const [team, setteam] = useState("");

  function teamSelect(input:string){
    setteam(input)
    console.log("function has been passed and ran ")
    console.log(input)
    console.log(typeof(input))
  }

  return (
    <div>
      <Selector 
        teamSelector={teamSelect}
      />
    </div>
  );
}


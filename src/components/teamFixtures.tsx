import React, { useEffect, useState } from 'react';
import { teamID, compId } from '../ObjectHelpers/helperObjects';
import {Results} from './Results';

interface passedProps {
  chosenTeam: string;
}

export const TeamFixtures: React.FC<passedProps> = ({ chosenTeam }) => {

  const [fixtures, setfixtures] = useState<any>([])

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var todayPlusYear = new Date(year + 1, month, day).toLocaleDateString().replace(/\//g, ".");
  var today = d.toLocaleDateString().replace(/\//g, ".");


  const getTeamId = (team: string):number => {
    const values = Object.values(teamID)
    const keys = Object.keys(teamID);
    let idNum: number = 0
    for (let i: number = 0; i < keys.length; i++) {
      if (team === keys[i]) {
        idNum = values[i]
      }
    }
    return idNum
  }


  const getFixtures = async (teamId: string): Promise<void> => {
    const response = await fetch(
      `http://api.football-api.com/2.0/matches?team_id=${getTeamId(teamId)}&from_date=${today}&to_date=${todayPlusYear}&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)

    const data = await response.json();
    if (await data.hasOwnProperty('code') 
        || data.message === "Limit Exceeded"
        ) 
    {
      console.log("error in fixtures")
    } else 
    {
      setfixtures(
        data.sort((a:any,b:any)=>{
          let first = a.formatted_date.slice(6,10)+a.formatted_date.slice(3,5)+a.formatted_date.slice(0,2)
          let second = b.formatted_date.slice(6,10)+b.formatted_date.slice(3,5)+b.formatted_date.slice(0,2)
          return first - second
        })
      );
    }
  }
  
  const compIdtoName =(id:string):string=>{
    const values = Object.values(compId)
    const keys = Object.keys(compId);
    let name:string =""
    for(let i:number =0; i < keys.length; i++){
      if(id === keys[i]){
         name = values[i]
      }
    }
    return name
  }

  useEffect(() => {
    getFixtures(chosenTeam)
  }, [chosenTeam])

  return (
    <div>
      <table>
        <tbody>
          {fixtures.map((x: FixturesObj, i: number) => (
            <tr key={i}>
              <th>{x.formatted_date}</th>
              <th>{x.localteam_name}</th>
              <th>VS</th>
              <th>{x.visitorteam_name}</th>
              <th>{x.time}</th>
              <th>{compIdtoName(x.comp_id)}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => console.log(fixtures)}>console</button>
      <>
        <Results 
          chosenTeam={chosenTeam}
          getTeamId={getTeamId}
        />
      </>
    </div>
  )
}



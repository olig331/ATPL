import React,{useEffect, useState} from 'react'

interface passedProps{
  chosenTeam:string
  getTeamId:any
}

export const Results:React.FC<passedProps> = ({chosenTeam, getTeamId}) => {

  const [results, setresults] = useState<FixturesObj[]>([]);

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var todayMinusyear = new Date(year - 1, month, day).toLocaleDateString().replace(/\//g, ".");
  var today = d.toLocaleDateString().replace(/\//g, ".");

  const getResults = async (teamId: string): Promise<void> => {
    const response = await fetch(
      `http://api.football-api.com/2.0/matches?team_id=${getTeamId(teamId)}&from_date=${todayMinusyear}&to_date=${today}&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)

    const data = await response.json();
    console.log("this is results")
    console.log(await data)

    if (await data.hasOwnProperty('code') 
        || data.message === "Limit Exceeded"
        ) 
    {
      console.log("error")
    } else 
    {
      // setresults(
      //   data.sort((a:any,b:any)=>{
      //     let first = a.formatted_date.slice(6,10)+a.formatted_date.slice(3,5)+a.formatted_date.slice(0,2)
      //     let second = b.formatted_date.slice(6,10)+b.formatted_date.slice(3,5)+b.formatted_date.slice(0,2)
      //     return first - second
      //   })
      // );
      setresults(data);
    }
  }

  useEffect(()=>{
    getResults(chosenTeam)
  },[chosenTeam])

  return (
    <div> 
      <button onClick={()=>console.log(results)}></button>
      <ul>
      {results.map((x,i)=>(
        <li key={i}>{x.localteam_name}  {x.ft_score}  {x.visitorteam_name}</li>  
      ))}
      </ul>
    </div>  
  )
}

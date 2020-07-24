import React,{useEffect, useState} from 'react'
import {getResults} from '../HelperFunctions/ResultsFunction';

interface passedProps{
  chosenTeam:string
  getTeamId:any
  compNameFinder:(id:string)=>any
  passResultstoStatsPage: (team:FixturesObj[])=>void
}

export const Results:React.FC<passedProps> = ({chosenTeam, compNameFinder, passResultstoStatsPage}) => {

  const [results, setresults] = useState<FixturesObj[]>([]);

  

  const resultWLD =(score:string, homeTeam:string) =>{
    let result:string[] = score.replace(/[\[\-\]]/g, "").split("");
    let wdl:string =""
    if(homeTeam === chosenTeam){
      if(result[0] > result[1]){
        wdl = "W"
      }else{
        wdl="L"
      }
    }else{
      if(result[0] > result[1]){
        wdl = "L"
      }else{
        wdl="W"
      }
    }
    if(result[0] === result [1]){
      wdl = "D"
    }
    return wdl
  }

  const setResultsFunc = async () =>{
    setresults(await getResults(chosenTeam))
  }

  useEffect(() =>{
    setResultsFunc()
  },[chosenTeam])

  useEffect(()=>{
    passResultstoStatsPage(results)
  }, [results])

  return (
    <div> 
      <button onClick={()=>console.log(results)}></button>
      <ul>
      {results.map((x:FixturesObj,i:number)=>(
        <li key={i}>{x.localteam_name}  {x.ft_score} {x.visitorteam_name} | {resultWLD(x.ft_score, x.localteam_name)} | {compNameFinder(x.comp_id)}</li>  
      ))}
      </ul>
    </div>  
  )
}

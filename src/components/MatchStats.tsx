import React, { useEffect, useState } from 'react';
import { getResults} from '../HelperFunctions/ResultsFunction';
import { goalsFinder} from '../HelperFunctions/StatsFunctions';

interface passedProps {
  chosenTeam: string;
  results: FixturesObj[];
  homeTeam:string;
  awayTeam:string;
}

export const MatchStats: React.FC<passedProps> = ({ results, chosenTeam, homeTeam, awayTeam}) => {

  const [homeTeamResults, sethomeTeamResults] = useState<FixturesObj[]>([]);
  const [awayTeamResults, setawayTeamResults] = useState<FixturesObj[]>([]);

  const getOtherTeamsresults = async () =>{
    let secondaryResults:any =[]
    if(homeTeam === chosenTeam){
      sethomeTeamResults(results)
      setawayTeamResults(await getResults(awayTeam));
    }else{
      setawayTeamResults(results)
      console.log("home team and chosen team not equal")
      console.log(results)
      sethomeTeamResults(await getResults(homeTeam));
    }
    return secondaryResults
  }

  useEffect(()=>{
    getOtherTeamsresults();
  }, [])

  const  goalsScoredByName = (scoresArray:any[]) => {
    var results:any = {};

    for (var scoredGoal of scoresArray) {
        let isPenalty = scoredGoal.goalScorer.slice(-7) === " (pen.)";
        let scorer = isPenalty ? scoredGoal.goalScorer.slice(0, -7) : scoredGoal.goalScorer;
        let assister = scoredGoal.assist;

       const defaultResultEntry = () => {return {totalGoals: 0, penaltyGoals: 0, totalAssists: 0}};

        results[scorer] = results[scorer] || defaultResultEntry();
        results[scorer].totalGoals += 1;

        if (isPenalty) {
            results[scorer].penaltyGoals += 1;
        }

        if (assister) {
            results[assister] = results[assister] || defaultResultEntry();
            results[assister].totalAssists += 1;
        }
    }

    return results;
}



  return (
    <div>
      <button onClick={()=>console.log(results)}>passedResults</button>
      <h5>HEllo World</h5>
      <button onClick={()=>goalsFinder(homeTeamResults, homeTeam)}>Home Goals</button>
      <button onClick={()=>goalsFinder(awayTeamResults, awayTeam)}>away Goals</button>
      <ul>
        {Object.keys(goalsScoredByName(goalsFinder(homeTeamResults, homeTeam))).map((x:any,i:number)=>(
          <li>{x} {x.totalGoals}</li>
        ))}  
      </ul> 
      <button onClick={()=>console.log(goalsScoredByName(goalsFinder(homeTeamResults, homeTeam)))}>log results</button>
    </div>
  )
}

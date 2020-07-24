  import { teamID } from '../ObjectHelpers/helperObjects';

  export const getTeamId = (team: string):number => {
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

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var todayMinusyear = new Date(year - 1, month, day).toLocaleDateString().replace(/\//g, ".");
  var today = d.toLocaleDateString().replace(/\//g, ".");

  export const getResults = async (teamId: string):Promise<any> => {
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
      
      return data
    }
  }
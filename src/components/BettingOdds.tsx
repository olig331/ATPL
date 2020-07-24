import React, { useState } from 'react';

interface passedProps {
  homeTeam: string;
  awayTeam: string;
  toggleStatsPage: (homeTeam: string, awayTeam: string) => void
}

export const BettingOdds: React.FC<passedProps> = ({ homeTeam, awayTeam, toggleStatsPage }) => {

  const KEY = "7b118d8365c0fe00a3aabe8edb1f88ad"

  const [odds, setodds] = useState<any[]>([]);

  const getOdds = async () => {
    const response = await fetch(`https://api.the-odds-api.com/v3/odds/?apiKey=${KEY}&sport=soccer_epl&region=uk&mkt=h2h`)
    const data = await response.json();
    console.log(await data.data);
    setodds(data.data)
  }

  const oddsMatch = (): any => {
    let result: any = []
    odds.map((x: OddsApiReturn) => {
      if (x.home_team === homeTeam && x.teams.includes(awayTeam)) {
        result = x.sites
      };
    });
    console.log(result)
    return result
  }


  return (
    <div>
      <button onClick={() => toggleStatsPage("", "")}></button>
      
      <button onClick={getOdds}>get odds</button>
      <button onClick={oddsMatch}>Odds Match</button>
      <h4>{homeTeam} VS {awayTeam}</h4>
      <table>
        <tbody>
          <tr>
            <th scope="col">Site</th>
            <th scope="col"></th>
            <th scope="col">Win</th>
            <th scope="col">Draw</th>
            <th scope="col">Win</th>
          </tr>
          {oddsMatch().map((y: SiteOdds, i: number) => (
            <tr key={i}>
              <th>{y.site_nice}</th>
              <th>h2h</th>
              <th>{y.odds.h2h[0]}</th>
              <th>{y.odds.h2h[2]}</th>
              <th>{y.odds.h2h[1]}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

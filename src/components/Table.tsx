import React, { useEffect, useState } from 'react'

interface passedProps {
  chosenTeam: string
}

export const Table: React.FC<passedProps> = ({ chosenTeam }) => {

  const [table, settable] = useState<TableObj[]>([])

  const standings = async () => {
    const response = await fetch("http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76")
    const data = await response.json();
    settable(data)
  }

  

  useEffect(() => {
    standings()
    console.log("calling table api")
  },[])

  return (
    <div>
      <table>
        <tbody>
          <tr className="table_headers">
            <th scope="col">Pos</th>
            <th scope="col">Team</th>
            <th scope="col">Points</th>
            <th scope="col">GP</th>
            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">GD</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">Form</th>
          </tr>

          {table.map((x, i) => (
            <tr className={x.team_name === chosenTeam?"highlighted_team":"normal"} key={i}>
              <th>{x.position}</th>
              <th>{x.team_name}</th>
              <th>{x.points}</th>
              <th>{x.overall_gp}</th>
              <th>{x.overall_w}</th>
              <th>{x.overall_d}</th>
              <th>{x.overall_l}</th>
              <th>{x.gd}</th>
              <th>{x.overall_gs}</th>
              <th>{x.overall_ga}</th>
              <th>{x.recent_form}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

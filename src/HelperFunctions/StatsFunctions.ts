export const goalsFinder = (teamsResults: FixturesObj[], team: string) => {
  let goalsFor: GoalStatsObj[] = []

  teamsResults.map((x) => x.events.map((y) => {
    if (x.localteam_name === team && x.comp_id === "1204") {
      if (y.type === "goal" && y.team === "localteam") {
        goalsFor.push({ goalScorer: y.player, goalTime: y.minute, assist: y.assist, against: x.visitorteam_name, date: x.formatted_date })
      };
    }
    else if (x.comp_id === "1204") {
      if (y.type === "goal" && y.team === "visitorteam") {
        goalsFor.push({ goalScorer: y.player, goalTime: y.minute, assist: y.assist, against: x.localteam_name, date: x.formatted_date })
      };
    };
  }));

  console.log(goalsFor);
  return goalsFor
} 
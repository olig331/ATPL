type FixturesObj ={
  comp_id: string,
  et_score: null | string,
  events: {
      assist:string, assist_id:string, extra_min:string, id:string, minute:string, player:string, player_id:string, player_id:string, result:string, team:string,   type:string
    }[],
  formatted_date: string,
  ft_score: string,
  ht_score: string,
  id: string,
  localteam_id: string,
  localteam_name: string,
  localteam_score: string,
  penalty_local:null | string,
  penalty_visitor: null | string,
  season: string,
  status : string,
  time: string, 
  timer: string, 
  venue: string, 
  venue_city: string,
  venue_id: string,
  visitorteam_id: string,
  visitorteam_name: string,
  visitorteam_score: string,
  week: string
}

type TableObj ={
  away_d: string,
  away_ga: string,
  away_gp: string,
  away_gs: string,
  away_l:string,
  away_w: string,
  comp_group:null | string,
  comp_id:string,
  country:string,
  description:string,
  gd:string,
  home_d:string,
  home_ga:string,
  home_gp:string,
  home_gs:string,
  home_l:string,
  home_w:string,
  overall_d:string,
  overall_ga:string,
  overall_gp:string,
  overall_gs:string,
  overall_l:string,
  overall_w:string,
  points:string,
  position:string,
  recent_form:string,
  round:string,
  status:string,
  team_id:string,
  team_name:string
}

type SiteOdds ={
  last_update:number,
  odds: {h2h:number[]},
  site_key:string,
  site_nice:string
}

type OddsApiReturn ={
  commence_time: number,
  home_team: string,
  sites: SiteOdds,
  sites_count:number,
  sport_key:string,
  sport_nice:string,
  teams:string[]
}

type GoalStatsObj ={
  goalScorer:string,
  goalTime:string,
  assist:string,
  against:string,
  date:string
}


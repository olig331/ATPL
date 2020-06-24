import React from 'react';

interface passedProps{
  chosenTeam: string;
}

export const TeamHighlights: React.FC<passedProps> = ({chosenTeam}) => {

  const url:string = "https://www.scorebat.com/video-api/v1/";

  const getHighlights = async (): Promise<void>=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let highlightArray:any[];

    const teamOnly = await data.map((x:any):void=>{
      x.side1.name === chosenTeam || x.side2.name === chosenTeam
      ?console.log(x)
      :console.log("no match");
      
    })

  }

  return (
    <div>
      <button onClick={getHighlights}>Highlights</button>
      <iframe src='https://www.scorebat.com/embed/v/5eee82ea8054e/?s=2'></iframe>
    </div>
  );
};



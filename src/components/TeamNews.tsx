import React from 'react'

interface passedProps{
  chosenTeam: string;
}

export const TeamNews:React.FC<passedProps> = ({chosenTeam}) => {

  const getNews = async ():Promise<void> => {
    const response = await fetch(`/news?team=${chosenTeam}`);
    let items = await response.json();
    console.log(await items)
  };

  return (
    <div>
      <button onClick={getNews}>news</button>
    </div>
  )
}

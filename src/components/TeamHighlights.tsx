import React,{useState} from 'react';


interface passedProps{
  chosenTeam: string;
}

export const TeamHighlights: React.FC<passedProps> = ({chosenTeam}) => {

  const [highlights, sethighlights] = useState<{}>([])

  const url:string = "https://www.scorebat.com/video-api/v1/";

  // const getHighlights = async (): Promise<void>=>{
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   let highlightArray:any[] =[];

  //   // setting highlights state to be only highlights relative to selected team
  //   const teamOnly = await data.map((item:any)=>{
  //       if(item.side1.name === chosenTeam || item.side2.name === chosenTeam){
  //         highlightArray = highlightArray.concat(item)
  //       }
  //   });
  //   sethighlights(highlightArray)
  // };

  const getHighlights = async ():Promise<void> => {
    const response = await fetch('/highlights');
    console.log(await response.json());
  };


  return (
    <div>
      <button onClick={()=>getHighlights()}>Highlights</button>
      <iframe src='https://www.scorebat.com/embed/v/5eee82ea8054e/?s=2'></iframe>
      <button onClick={() => console.log(highlights)}>btn2</button>
    </div>
  );
};



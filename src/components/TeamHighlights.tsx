import React,{useState, useEffect} from 'react';


interface passedProps{
  chosenTeam: string;
}

export const TeamHighlights: React.FC<passedProps> = ({chosenTeam}) => {

  const [highlights, sethighlights] = useState<string[]>([])

  const replaceWatch =(items:string[])=>{
    sethighlights(items.map((x:string)=>{
      return x.replace("watch?v=", "embed/");
    }));
  }

  const getHighlights = async ():Promise<any> => {
    const response = await fetch(`/highlights?team=${chosenTeam}`);
    let items = await response.json();
    console.log(items)
    replaceWatch(await items);
  };

  useEffect(() => {
    getHighlights()
  }, [chosenTeam])

  return (
    <div>
      <h4>{chosenTeam}</h4>
      <button onClick={()=>getHighlights()}>Highlights</button>
      <iframe width="500" height="410" frameBorder="0" allowFullScreen title="highlight" src={highlights[0]}></iframe>
      <button onClick={() => console.log(highlights)}>btn2</button>
      <ul>
        {highlights.map((x,i)=>{
          return <li key={i}>{x+1}</li>
        })}
      </ul>
    </div>
  );
};



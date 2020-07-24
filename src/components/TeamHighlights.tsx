import React,{useState, useEffect} from 'react';


interface passedProps{
  chosenTeam: string;
}

export const TeamHighlights: React.FC<passedProps> = ({chosenTeam}) => {

  const [highlights, sethighlights] = useState<string[][]>([]);

  //split returned string into sub arrays of HREF and title
  const replaceWatch =(items:string[])=>{  
    const result = items.map((x:string)=>{
      return x.split("+");
    });
    sethighlights(result);
  };

  //get the hrefs and titles of matches
  const getHighlights = async ():Promise<any> => {
    const response = await fetch(`/highlights?team=${chosenTeam}`);
    let items = await response.json();
    replaceWatch(await items);
  };

  useEffect(() => {
    getHighlights()
  }, [chosenTeam])

  return (
    <div>
      <h4>{chosenTeam}</h4>
      <div className="highlight_videos">
        <ul>
          {highlights.map((x:string[],i:number)=>(
                <div key={i}>
                  <li key={i}>
                    <iframe 
                      title="Highlights"
                      src={x[0].replace("watch?v=", "embed/")} width="200" 
                      height="200" allowFullScreen 
                      frameBorder="0">
                    </iframe>{x[1].replace(/^[^|]+\|/, "")}
                  </li>
                </div>
              ))
            }
        </ul>
      </div>
      
      <button onClick={()=> console.log(typeof(highlights[1][0]))}></button>
    </div>

  );
};



import React,{useState} from 'react';
import {bgArr} from '../ObjectHelpers/helperObjects';

interface ChildProps{
  teamSelector: (input:string) =>void
}

export const Selector: React.FC<ChildProps> = (props) => {
  const [backgroundColor, setbackgroundColor] = useState<string>("");

  // set background color based on team selected (Background Colours Object located in style folder)
  const bgColorSetFunc =(team:string)=>{
    const values = Object.values(bgArr)
    const keys = Object.keys(bgArr);
    let color:string =""
    for(let i:number =0; i < keys.length; i++){
      if(team === keys[i]){
         color = values[i]
      }
    }
    setbackgroundColor(color)
  }

  // importing all images from img folder for team images
  function importAll(items:any) {
    return items.keys().map(items);
  };
  const teamImages = importAll(require.context('../imgs', false, /\.(png|jpe?g|svg)$/));

  // tidying up names with regex 
  const nameRegexFunc = (name:string):string => {
    let regex:RegExp, result:any;
    regex = /a\/(.*?)(\.)/;
    result = name.match(regex);
    result = result[1]
    result = result.replace("-", " ");
    return result;
  };

  return (
    <div style={{backgroundColor: backgroundColor}}>
      <div className="team_tile_imgs">
      {teamImages.map((x:string, i:number)=>(
        <img onClick={()=>{props.teamSelector(nameRegexFunc(x)); bgColorSetFunc(nameRegexFunc(x))}} src={x} key={i} alt={nameRegexFunc(x)} className="img-selector"/>
      ))}
      </div>
    </div>
  );
};


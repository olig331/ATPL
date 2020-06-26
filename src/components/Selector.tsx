import React from 'react';

interface ChildProps{
  teamSelector: (input:string) =>void
}

export const Selector: React.FC<ChildProps> = (props) => {

  function importAll(items:any) {
    return items.keys().map(items);
  };
  const teamImages = importAll(require.context('../imgs', false, /\.(png|jpe?g|svg)$/));

  const nameRegexFunc = (name:string):string => {
    let regex:RegExp, result:any;
    regex = /a\/(.*?)(\.)/;
    result = name.match(regex);
    result = result[1]
    result = result.replace("-", " ");
    return result;
  };

  return (
    <div>
      {teamImages.map((x:string, i:number)=>(
        <img onClick={()=>props.teamSelector(nameRegexFunc(x))} src={x} key={i} alt={nameRegexFunc(x)} className="img-selector"/>
      ))}
    </div>
  );
};

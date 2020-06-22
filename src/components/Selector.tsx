      import React from 'react';
      import Arsenal from '../imgs/Arsenal.png';
      import AstonVilla from '../imgs/Aston-Villa.png';
      import Bournemouth from '../imgs/Bournemouth.png';
      import Brighton from '../imgs/Brighton.png';
      import Burnley from '../imgs/Burnley.png';
      import Chelsea from '../imgs/Chelsea.png';
      import CrystalPalace from '../imgs/Crystal-Palace.png';
      import Everton from '../imgs/Everton.png';
      import Leicester from '../imgs/Leicester.png';
      import Liverpool from '../imgs/Liverpool.png';
      import ManCity from '../imgs/Manchester-City.png';
      import ManU from '../imgs/Manchester-Utd.png';
      import Newcastle from '../imgs/Newcastle.png';
      import Norwich from '../imgs/Norwich.png';
      import SheffUtd from '../imgs/Sheffield-Utd.png';
      import Southampton from '../imgs/Southampton.png';
      import Spurs from '../imgs/Tottenham.png';
      import Watford from '../imgs/Watford.png';
      import WestHam from '../imgs/West-Ham.png';
      import Wolves from '../imgs/Wolves.png';

      interface ChildProps{
        teamSelector: (input:string) =>void
      }

export const Selector: React.FC<ChildProps> = (props) => {
  return (
    <div>
      <img onClick={()=>props.teamSelector(String("1"))} src={String(Arsenal)} alt="Arsenal" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("2"))} src={String(AstonVilla)} alt="Aston Villa" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("3"))} src={String(Bournemouth)} alt="Bournemouth" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("4"))} src={String(Brighton)} alt={"Brighton"} className="img-selector" />
      <img onClick={()=>props.teamSelector(String("5"))} src={String(Burnley)} alt="Burnley" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("6"))} src={String(Chelsea)} alt="Chelsea" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("7"))} src={String(CrystalPalace)} alt="Crystal Palace" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("8"))} src={String(Everton)} alt="Everton" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("9"))} src={String(Leicester)} alt="Leicester" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("10"))} src={String(Liverpool)} alt="Liverpool" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("11"))} src={String(ManCity)} alt="Man City" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("12"))} src={String(ManU)} alt="Man Utd" className="img-selector"/> 
      <img onClick={()=>props.teamSelector(String("13"))} src={String(Newcastle)} alt="Newcastle" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("14"))} src={String(Norwich)} alt="Norwich" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("15"))} src={String(SheffUtd)} alt="Sheffield Utd" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("16"))} src={String(Southampton)} alt="Southampton" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("17"))} src={String(Spurs)} alt="Spurs" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("18"))} src={String(Watford)} alt="Watford" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("19"))} src={String(WestHam)} alt="West Ham" className="img-selector"/>
      <img onClick={()=>props.teamSelector(String("20"))} src={String(Wolves)} alt="Wolves" className="img-selector"/>
    </div>
  )
}

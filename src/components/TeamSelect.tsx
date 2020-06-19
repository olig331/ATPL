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
import '../style/style.css';

export const TeamSelect: React.FC = () => {
  return (
    <div className="">
      <img src={Arsenal} alt="Arsenal"  className="img-selector"/>
      <img src={AstonVilla} alt="Aston Villa" className="img-selector"/>
      <img src={Bournemouth} alt="Bournemouth" className="img-selector"/>
      <img src={Brighton} alt="Brighton" className="img-selector"/>
      <img src={Burnley} alt="Burnley" className="img-selector"/>
      <img src={Chelsea} alt="Chelsea" className="img-selector"/>
      <img src={CrystalPalace} alt="Crystal Palace" className="img-selector"/>
      <img src={Everton} alt="Everton" className="img-selector"/>
      <img src={Leicester} alt="Leicester" className="img-selector"/>
      <img src={Liverpool} alt="Liverpool" className="img-selector"/>
      <img src={ManCity} alt="Man City" className="img-selector"/>
      <img src={ManU} alt="Man Utd" className="img-selector"/>
      <img src={Newcastle} alt="Newcastle" className="img-selector"/>
      <img src={Norwich} alt="Norwich" className="img-selector"/>
      <img src={SheffUtd} alt="Sheffield Utd" className="img-selector"/>
      <img src={Southampton} alt="Southampton" className="img-selector"/>
      <img src={Spurs} alt="Spurs" className="img-selector"/>
      <img src={Watford} alt="Watford" className="img-selector"/>
      <img src={WestHam} alt="West Ham" className="img-selector"/>
      <img src={Wolves} alt="Wolves" className="img-selector"/>
    </div>
  );
};

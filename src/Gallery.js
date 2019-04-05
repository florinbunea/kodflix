import React from 'react'
import TvShow from './TvShow';
import BlackMirror from './images/Black Mirror.jpg';
import GameofThrones from './images/Game of Thrones.jpg';
import MeninBlack from './images/Men in Black.jpg';
import StarWars from './images/Star Wars.jpg';
import TheWalkingDead from './images/The Walking Dead.jpg';
import Venom from './images/Venom.jpg';

export default function Gallery() {
    return (
      <div>
        <div className='container'>
          <TvShow  id='Black Mirror' name='Black Mirror' logo={BlackMirror} />
          <TvShow id='Game of Thrones' name='Game of Thrones' logo={GameofThrones} />
          <TvShow id ='Men in Black' name='Men in Black' logo={MeninBlack} />
        </div>
        <div className='container'>
          <TvShow  id='Star Wars'name='Star Wars' logo={StarWars} />
          <TvShow id='The Walking Dead' name='The Walking Dead' logo={TheWalkingDead} />
          <TvShow id= 'Venom' name='Venom' logo={Venom} />
        </div>
      </div>
    );
  
  }
  
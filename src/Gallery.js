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
          <TvShow name='Black Mirror' logo={BlackMirror} />
          <TvShow name='Game of Thrones' logo={GameofThrones} />
          <TvShow name='Men in Black' logo={MeninBlack} />
        </div>
        <div className='container'>
          <TvShow name='Star Wars' logo={StarWars} />
          <TvShow name='The Walking Dead' logo={TheWalkingDead} />
          <TvShow name='Venom' logo={Venom} />
        </div>
      </div>
    );
  
  }
  
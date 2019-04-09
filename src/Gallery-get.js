import BlackMirror from './images/Black Mirror.jpg';
import GameofThrones from './images/Game of Thrones.jpg';
import MeninBlack from './images/Men in Black.jpg';
import StarWars from './images/Star Wars.jpg';
import TheWalkingDead from './images/The Walking Dead.jpg';
import Venom from './images/Venom.jpg';

export default function getTvShow() {
    return [
      { id: 'Black Mirror', name: 'Black Mirror', logo: BlackMirror },
      { id: 'Game of Thrones', name: 'Game of Thrones', logo: GameofThrones },
      { id: 'Men in Black', name: 'Men in Black', logo: MeninBlack },
      { id: 'Star Wars', name: 'Star Wars', logo: StarWars },
      { id: 'The Walking Dead', name: 'The Walking Dead', logo: TheWalkingDead },
      { id: 'Venom', name: 'Venom', logo: Venom },
  
    ];
  }
  
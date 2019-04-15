import BlackMirror from './images/Black Mirror.jpg';
import GameofThrones from './images/Game of Thrones.jpg';
import MeninBlack from './images/Men in Black.jpg';
import StarWars from './images/Stars Wars.jpg';
import TheWalkingDead from './images/The Walking Dead.jpg';
import Venom from './images/Venom.jpg';

export default function getTvShow() {
    return [
      { id: 'Black Mirror', name: 'Black Mirror', logo: BlackMirror, details: 'An anthology series exploring a twisted, high-tech world where humanity is greatest innovations and darkest instincts collide.' },
      { id: 'Game of Thrones', name: 'Game of Thrones', logo: GameofThrones, details: 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.' },
      { id: 'Men in Black', name: 'Men in Black', logo: MeninBlack, details: 'A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.' },
      { id: 'Star Wars', name: 'Star Wars', logo: StarWars, details: 'Three decades after the Empire is defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance is search for the missing Luke Skywalker.'},
      { id: 'The Walking Dead', name: 'The Walking Dead', logo: TheWalkingDead, details: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.'},
      { id: 'Venom', name: 'Venom', logo: Venom, details: 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.' },
    ];
  }
  
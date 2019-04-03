import React, { Component } from 'react';
import './App.css';
import BlackMirror from './images/Black Mirror.jpg';
import GameofThornes from './images/Game of Thrones.jpg';
import MeninBlack from './images/Men in Black.jpg';
import starwars from './images/Star Wars.jpg';
import TheWalkingDead from './images/The Walking Dead.jpg';
import Venom from './images/Venom.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='item'>
            <img src={BlackMirror} alt='Black Mirror.jpg' />
            <div className='overlay'>
              <h1>BlackMirror</h1>
            </div>
          </div>
          <div className='item'>
            <img src={GameofThornes} alt='Game Of Thrones.jpg' />
            <div className='overlay'>
              <h1>GameofThrones</h1>
            </div>
          </div>
          <div className='item'>
            <img src={MeninBlack} alt='Men in Black.jpg' />
            <div className='overlay'>
              <h1>Man in Black</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={starwars} alt='Star Wars.jpg' />
            <div className='overlay'>
              <h1>Star Wars</h1>
            </div>
          </div>
          <div className='item'>
            <img src={TheWalkingDead} alt='The Walking Dead.jpg' />
            <div className='overlay'>
              <h1>The Walking Dead</h1>
            </div>
          </div>
          <div className='item'>
            <img src={Venom} alt='Venom.jpg' />
            <div className='overlay'>
              <h1>Venom</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import venomLogo from './Venom.jpeg';
import './App.css';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <main>
         <div>
           <div className='container'>
             <div className='item'><h2>Black Mirror</h2></div>
             <div className='item'><h2>Game of Thrones</h2></div>
             <div className='item'><h2>Man in Black</h2></div>
           </div>
           <div className='container'>
             <div className='item'><h2>Star Wors</h2></div>
             <div className='item'><h2>The Walking Dead</h2></div>
             <div className='item'><h2>Venom</h2></div>
           </div>
         </div>
       </main>
       </div>
    );  
 
  }
}

export default App;

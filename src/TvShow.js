import React from 'react';

export default function TvShow(props) {
    return (
      <div className='item'>
        <img src={props.logo} alt={`${props.name} logo`} />
        <div className='overlay'>
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }
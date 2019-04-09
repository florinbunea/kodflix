import React from 'react'
import TvShow from './TvShow';
import getTvShow from './Gallery-get';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getTvShow().map(tvShow => (
           <TvShow 
              key={tvShow.id}  
              id={tvShow.id} 
              name={tvShow.name} 
              logo={tvShow.logo} />
          ))
        } 
      </div>
    </div>
  );
}


import React from 'react'
import TvShow from './TvShow';
import getTvShow from './Gallery-get';

export default function Gallery() {

  fetch('/rest/Gallery-get')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
    });

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


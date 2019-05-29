import React from 'react'
import TvShow from './TvShow';


export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = { shows: [] }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(response => response.json())
      .then(shows => this.setState({ shows }));
  }
   render() {
    return (
      <div>
        <div className='container'>
          {
            this.state.shows.map( tvShow => {
              return (
              <TvShow
                key={tvShow.id}
                id={tvShow.id}
                name={tvShow.name}
                logo={tvShow.logo} />
            );
          })
          } 
        </div>
      </div>
    );
  }
}

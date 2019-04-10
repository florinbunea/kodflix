
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import getTvshow from './Gallery-get';
import {Redirect} from 'react-router-dom';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            tvShow: {}
        };
    }
    componentDidMount() {
        let tvshowId = this.props.match.params.tvshowId;
        let tvShow = getTvshow()
        .find((tvShow) => tvShow.id === tvshowId);
        this.setState({ tvShow });
    }

    render() {
        let movie = this.state.tvShow;
        if (movie) {
            return <h1>{this.state.tvShow.name}</h1>;
        }
        else {
            return <Redirect to ='not-found' />
        }
        //return (
          //  <div>
            //    <h1>{this.state.tvShow.name}</h1>
              //  <Link to='/'>Back to home page</Link>
            //</div>
        //);
    }
}


import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getTvshow from '../Gallery-get';
import './Details.css';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            show: {}
        };
    }
    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => {
                console.log('inside cpdm is', shows)
                let showId = this.props.match.params.tvshowId
                let show = shows.find(show => show.id === showId);
                this.setState({ show });
            });
    }

    render() {
        let show = this.state.show;
        console.log('the show is truthy', show)
        if (show) {
            return show.id ?
                <DetailsContent show={show} /> :
                <div />
        } else {
            return <Redirect to='./not-found' />
        }
    }
}

function DetailsContent({ show }) {
    console.log(show)

    return (
        <div className='details' >
            <h1>{show.name}</h1>
            <div className='content'>
                <div className='text'>
                    {show.details}
                </div>
                <div className='cover'>
                    <img
                        src={require(`../common/images/${show.id}.jpg`)}
                        alt={show.name} />
                </div>
            </div>
            <Link to='/'><h1 className='return'>Back Home Page</h1></Link>
        </div>
    )
}  

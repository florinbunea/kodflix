
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTvshow from '../Gallery-get';
import './Details.css';

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
        if (this.state.tvShow === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div className='Details'>
                    <h1 className='title'>{this.state.tvShow.name}</h1>
                    <div className='content'>
                        <h2 className='text'>
                            {this.state.tvShow.details}
                        </h2>
                        <img className='image'
                            src={this.state.tvShow.logo}
                            alt={this.state.tvShow.name} />
                    </div>
                    <Link to='/'><h1>Home Page</h1></Link>
                </div>
            );
        }
    }
}    
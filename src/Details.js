
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTvshow from './Gallery-get';


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
                <div>
                    <h1>{this.state.tvShow.name}</h1>
                    <Link to='/'>Back to home page</Link>
                </div>
            );
        }
    }
}    

 import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            welcomeMessage: 'Hello, this will be the details page for each Movie & TV Show'
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMessage: 'Coming soon!'
            });
        }, 3000);
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.welcomeMessage}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}

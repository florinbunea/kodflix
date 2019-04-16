import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>Ooops, it looks like this page doesn't exist :(</h1>
            <Link to='/'><h1 className='return'>Home Page</h1></Link>
        </div>
    );
}
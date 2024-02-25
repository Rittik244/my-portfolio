import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {

    document.title = "Error";

    return (
        <div className='error'>
            <h1>404 Page not found!</h1>
            <p>Back to <Link to="/">Home</Link></p>
        </div>
    )
}

export default Error;

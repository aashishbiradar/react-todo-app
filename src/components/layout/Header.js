import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h2>
                React Todo App
            </h2>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

/*** Styles ***/
const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#ccc',
    padding: '10px'
}
const linkStyle = {
    textDecoration: 'none'
}
/*** ***/

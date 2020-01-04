import React from 'react'

export default function Header() {
    return (
        <header>
            <h2 style={headerStyle}>
                React Todo App
            </h2>
        </header>
    )
}

/*** Styles ***/
const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#ccc',
    padding: '10px'
}
/*** ***/

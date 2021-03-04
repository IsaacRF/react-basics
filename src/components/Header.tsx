import React from 'react';

function Header({title, subtitle}: any) {
    return(
        <header id='header' className='header'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    )
}

export default Header;
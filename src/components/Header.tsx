import React from 'react';

function Header() {
    let text1 = 'Test text';

    return(
        <div id='header' className='header'>
            <h1>-HEADER COMPONENT-</h1>
            <p>Text 1: {text1}</p>
        </div>
    )
}

export default Header;
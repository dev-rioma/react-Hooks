import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const color = useContext(ThemeContext);

    return (
        <div className='Header'>
            <h1 style={ {color} }>ReactHooks</h1>
        </div>
    );
    
}


export default Header;


import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const Moon = <MoonIcon className='h-5 w-5 text-blue-500' viewBox=' 0 0 20 20' fill='black'  />
const Sun = <SunIcon className='h-5 w-5 text-blue-500' viewBox='0 0 20 20' fill='black' />

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    
    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className='Header'>
            <h1>ReactHooks</h1>
            <button className='Dark_ligth' type='button' onClick={handleClick}>{darkMode ? Moon : Sun } </button>
        </div>
    );
    
}







export default Header;


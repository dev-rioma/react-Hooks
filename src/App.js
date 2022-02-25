import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';



const Moon = <MoonIcon className='h-5 w-5 text-blue-500' viewBox=' 0 0 20 20' fill='white' />
const Sun = <SunIcon className='h-5 w-5 text-blue-500' viewBox='0 0 20 20' fill='black' />

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'ligth');

  const switchTheme = () => {
    const newTheme = theme === 'ligth' ? 'dark' : 'ligth';
    setTheme(newTheme);
  }


  return (
    <div className="App" data-theme={theme}>
      <Header />
      <div className='buttonBox'>
        <button onClick={switchTheme}>
          {theme ==='ligth' ? Sun : Moon} 
        </button>
      </div>
      <Characters />
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return ( 
    <div  className='light-dark-toggle'>
      <input className='checkbox' type='checkbox' id='checkbox' onClick={toggleTheme} />
      <label htmlFor='checkbox' className='label'>
        <i className='moon'>🌙</i>
        <i className='sun'>☀️</i>
        <div className='ball'></div>
      </label>
    </div>
   );
}
 
export default ThemeToggle;
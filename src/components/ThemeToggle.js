import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  let emoji = isLightTheme ? '🌙' : '☀️';
  return ( 
    <button class='light-dark-button' onClick={toggleTheme} >{emoji}</button>
   );
}
 
export default ThemeToggle;
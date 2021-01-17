import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import StockChart from './StockChart';
import StockForm from './StockForm';

const StockList = () => {
  const [stocks, setStock] = useState([]);
  const [displayName, setDisplayName] = useState('');
  const [metaData, setMetaData] = useState([]);
  const [timeSeries, setTimeSeries] = useState([]);

  const addStock = ({name, data}) => {
    setStock([...stocks, {name, data}]);
    setDisplayName(name.toUpperCase());
    setMetaData(data.metaData);
    setTimeSeries(data.timeSeries);
  }

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const currentTheme = isLightTheme ? light : dark;

  return ( 
    <div className='stock-list' style={{background: currentTheme.bg}}>
      
      <ThemeToggle />
      <StockForm addStock={addStock}/>
      <h1 className='stock-list' style={{color: currentTheme.content}}>Viewing: {displayName}</h1>
      <h1 className='stock-list'>{stocks[displayName]}</h1>
      <StockChart metaData={metaData} timeSeries={timeSeries}/>
    </div>
   );
}
 
export default StockList;
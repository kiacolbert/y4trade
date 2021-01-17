import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
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
    <div style={{background: currentTheme.bg}}className='StockList'>
      <StockForm addStock={addStock}/>
      <h1 style={{color: currentTheme.content}}>Viewing: {displayName}</h1>
      <h1>{stocks[displayName]}</h1>
      <StockChart metaData={metaData} timeSeries={timeSeries}/>
    </div>
   );
}
 
export default StockList;
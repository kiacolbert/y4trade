import React, { useState, useEffect } from 'react';
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

  return ( 
    <div className='StockList'>
      <StockForm addStock={addStock}/>
      <h1>Viewing: {displayName}</h1>
      <h1>{stocks[displayName]}</h1>
      <StockChart metaData={metaData} timeSeries={timeSeries}/>
    </div>
   );
}
 
export default StockList;
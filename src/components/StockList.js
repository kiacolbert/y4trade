import React, { useState } from 'react';
<<<<<<< HEAD
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
    setMetaData(data['Meta Data']);
    setTimeSeries(data['Time Series (1min)']);
=======
import StockForm from './StockForm';

const StockList = () => {
  const [stocks, setStock] = useState('');
  const addStock = (stock) => {
    setStock([...stocks, stock]);
>>>>>>> c7b3c2b2f3a0f176024051c9cb45b7858a64c8f9
  }

  return ( 
    <div className='StockList'>
      <StockForm addStock={addStock}/>
<<<<<<< HEAD
      <h1>Viewing: {displayName}</h1>
      <h1>{stocks[displayName]}</h1>
      <StockChart metaData={metaData} timeSeries={timeSeries}/>
=======
      <h1>{stocks[0]}</h1>
>>>>>>> c7b3c2b2f3a0f176024051c9cb45b7858a64c8f9
    </div>
   );
}
 
export default StockList;
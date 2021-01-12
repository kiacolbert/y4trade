import React, { useState } from 'react';
import StockForm from './StockForm';

const StockList = () => {
  const [stocks, setStock] = useState('');
  const addStock = (stock) => {
    setStock([...stocks, stock]);
  }

  return ( 
    <div className='StockList'>
      <StockForm addStock={addStock}/>
      <h1>{stocks[0]}</h1>
    </div>
   );
}
 
export default StockList;
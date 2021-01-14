import React, { useState } from 'react';
import Alpha from 'alphavantage';

const StockForm = ({addStock}) => {
  const [stockName, setStockName] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const alpha = Alpha({key: process.env.REACT_APP_ALPHAVANTAGE_KEY})
    alpha.data.intraday(stockName).then((data) => {
      console.log(data);
      addStock({name:stockName, data});
    });
    setStockName('');
  }
  return ( 
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='ticker symbol' value={stockName}
      onChange={(e) => setStockName(e.target.value)}></input>
      <input type='submit' value='get stock' />
    </form>
   );
}
 
export default StockForm;
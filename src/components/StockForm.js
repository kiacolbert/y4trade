import React, { useState } from 'react';
import Alpha from 'alphavantage';

const StockForm = ({addStock}) => {
  const [stock, setStock] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    addStock(stock);
    const alpha = Alpha({key: process.env.REACT_APP_ALPHAVANTAGE_KEY})
    alpha.data.intraday(`msft`).then((data) => {
      console.log(data);
    });
    setStock('');

  }
  return ( 
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='ticker symbol' value={stock}
      onChange={(e) => setStock(e.target.value)}></input>
      <input type='submit' value='get stock' />
    </form>
   );
}
 
export default StockForm;
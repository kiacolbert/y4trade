import React, { useState } from 'react';

const StockForm = ({addStock}) => {
  console.log(addStock)
  const [stock, setStock] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    addStock(stock);
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
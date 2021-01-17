import React, { useState } from 'react';
import Alpha from 'alphavantage';

const StockForm = ({addStock}) => {
  const [stockName, setStockName] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const alpha = Alpha({key: process.env.REACT_APP_ALPHAVANTAGE_KEY})
    alpha.data.intraday(stockName).then((data) => {
      debugger;
      const cleaned = alpha.util.polish(data);
      let reOrged = reorganizeTimeSeries(cleaned.data);
      addStock({name:stockName, data:{ metaData: cleaned.meta, timeSeries: reOrged}});
    }).catch(error => alert(error.message ?? 'problem retrieving data. check ticker symbol.'));
    setStockName('');
  }
  /**
   * transposes and separates data in categories.
   * @param {Object} timeSeries 
   * @returns {Object}
   */
  const reorganizeTimeSeries = (timeSeries) => {
    let date = [];
    let close = [];
    let high = [];
    let low = [];
    let open = [];

    for (let key in timeSeries) {
      date.push(key);
      close.push(timeSeries[key].close);
      open.push(timeSeries[key].open);
      high.push(timeSeries[key].high);
      low.push(timeSeries[key].low);
    }
    return { date, close, high, low, open };
  } 

  return ( 
    <form className='stock-form' onSubmit={onSubmit}>
      <input className='stock-form' type='text' placeholder='ticker symbol' value={stockName}
      onChange={(e) => setStockName(e.target.value)}></input>
      <input className='btn' type='submit' value='get data' />
    </form>
   );
}
 
export default StockForm;
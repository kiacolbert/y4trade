import React, { useState } from 'react';
import Alpha from 'alphavantage';

const StockForm = ({addStock}) => {
  const [stockName, setStockName] = useState('');
  // needs error handling
  const onSubmit = (e) => {
    e.preventDefault();
    const alpha = Alpha({key: process.env.REACT_APP_ALPHAVANTAGE_KEY})
    alpha.data.intraday(stockName).then((data) => {
      let cleaned = cleanData(data);
      let reOrged = reorganizeTimeSeries(cleaned.timeSeries);
      addStock({name:stockName, data:{ metaData: cleaned.metaData, timeSeries: reOrged}});
    });
    setStockName('');
  }
  const cleanData = (data) => {
    const META_DATA = 'Meta Data'
    const TIME_SERIES_1_MIN = 'Time Series (1min)'
    const newData =  {};
    Object.keys(data[META_DATA]).forEach(oldKey => {
      let newKey = oldKey.replace(/\d\D\s/,'');
      newData[newKey] = data[META_DATA][oldKey];
    });
    const newTimeData = {};
    Object.keys(data[TIME_SERIES_1_MIN]).forEach(time => {
      newTimeData[time] = {};
      Object.keys(data[TIME_SERIES_1_MIN][time]).forEach(key => {
        let newKey = key.replace(/\d\D\s/,'');
        newTimeData[time][newKey] = data[TIME_SERIES_1_MIN][time][key];
      })
    });
    return { metaData: newData, timeSeries: newTimeData};
  }
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
      <input type='submit' value='get data' />
    </form>
   );
}
 
export default StockForm;
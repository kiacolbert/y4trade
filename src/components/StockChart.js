import React from 'react';
import Plot from 'react-plotly.js';

const StockChart = (props) => {
const{ date, close, high, low, open } = props.timeSeries;

  return ( 
    <Plot data={[
      {
        x: date,
        close: close,
        decreasing: {line: { color:  'red'}},
        high: high,
        increasing: { line: {color: 'green'}},
        line: {color: 'rgba(31,119,180,1'},
        low: low,
        open: open,
        type: 'candlestick',
        mode: 'lines+markers',
        marker: {color: 'red'},
      }
    ]}
    layout={ {width: 1000, height: 500, title: 'A Fancy Plot'} }>
  </Plot> 
  );
}
 
export default StockChart;
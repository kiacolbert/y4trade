import React, { useContext } from 'react';
import Plot from 'react-plotly.js';
import { ThemeContext } from '../context/ThemeContext';
const StockChart = (props) => {
const{ date, close, high, low, open } = props.timeSeries;
const { isLightTheme, light, dark } = useContext(ThemeContext);
const theme = isLightTheme ? light : dark;
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
    layout={{
      width: 1000, 
      height: 500, 
      title: props.metaData.Information,
      paper_bgcolor: theme.bg,
      plot_bgcolor: theme.bg,
      xaxis: { color: theme.content },
      yaxis: { color: theme.content },
      annotations: [{
        showarrow: true,
        x: "2021-01-15T22:36:00",
        y: 9.835,
        text: "Point 1",
        font: {
          color: "black",
          size: 16
        },
        xanchor: "left",
        xshift: 1,
        opacity: 0.7
      }],
      }}>
  </Plot> 
  );
}
 
export default StockChart;
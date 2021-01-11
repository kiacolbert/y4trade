import React from 'react';
import Alpha from 'alphavantage';

const Button = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const alpha = Alpha({key: process.env.REACT_APP_ALPHAVANTAGE_KEY})
    alpha.data.intraday(`msft`).then((data) => {
      console.log(data);
    });
  }
  return ( 
    <button onClick={handleClick}>
      Get Data
    </button>
   );
}
 
export default Button;
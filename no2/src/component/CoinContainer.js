import React from 'react';
var moment = require("moment");

const CoinContainer = (props) => {
  var date = moment(parseInt(props.percent.last_updated)).format('DD-MMMM-YYYY, hh:mm:ss');
  return (
    <div className="four columns">
      <div className="coin-containern" style={{background: props.color}}>
          <h1>{props.name}</h1>
          <h3> Price: {props.price_usd} USD </h3>
          <p> Change: <span> {props.percent.change}</span></p>
          <p> Market Cap:<span> {props.percent.market_cap_usd}</span></p>
          <p> Updated: <span> {date}</span></p>
      </div>
    </div>
  )
};


export default CoinContainer;

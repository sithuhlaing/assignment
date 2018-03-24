import React from 'react';

const CoinContainer = (props) => (
  <div className="four columns">
    <div className="coin-container">
        <h1>{props.name}</h1>
        <h3> Price: {props.price_usd} USD </h3>
        <p> Change: <span className={props.classes.hour}> {props.percent.hour}</span></p>
        <p> Market Cap:<span className={props.classes.day}> {props.percent.day}</span></p>
        <p> Updated: <span className={props.classes.day7}> {props.percent.day7}</span></p>
        {props.children}
    </div>
  </div>
);


export default CoinContainer;

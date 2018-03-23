import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crypto Dashboard</h1>
        </header>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Bitcoins</h3>
            <div>
              price :
            </div>
            <div>
              Change:
            </div>
            <div>
              Martket Cap:
            </div>
            <div>
              Uploaded:
            </div>
          </div>
          <div className="grid-item">
            <h3>Bitcoins</h3>
            <div>
              price :
            </div>
            <div>
              Change:
            </div>
            <div>
              Martket Cap:
            </div>
            <div>
              Uploaded:
            </div>
          </div>
          <div className="grid-item">
            <h3>Bitcoins</h3>
            <div>
              price :
            </div>
            <div>
              Change:
            </div>
            <div>
              Martket Cap:
            </div>
            <div>
              Uploaded:
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

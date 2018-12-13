import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Spring } from 'react-spring'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Spring from={{ opacity: 0, marginRight: -1000 }} to={{ opacity: 1, marginRight: 0 }}>
              {props => <div style={props}>hello</div>}
            </Spring>
          </p>
          <span>
            <Spring from={{ opacity: 0, marginLeft: -1000 }} to={{ opacity: 1, marginLeft: 0 }}>
              {props => <div style={props}>world</div>}
            </Spring>
          </span>
        </header>
      </div>
    );
  }
}

export default App;

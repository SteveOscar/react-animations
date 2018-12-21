import React, { Component } from 'react';
import First from './First.js'
import logo from './logo.svg';
import './App.css';

import { Spring, Transition, config } from 'react-spring'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <First />
          <p>
            <Spring config={{delay: 500, duration: 2000}} from={{ opacity: 0, color: 'white', marginRight: -1000 }} to={{ opacity: 0.8, color: 'red', marginRight: 0 }}>
              {props => <div className="name-text" style={props}>Steve</div>}
            </Spring>
          </p>
          <span>
            <Spring config={{delay: 1500}} from={{ opacity: 0, marginLeft: -1000 }} to={{ opacity: 1, marginLeft: 0 }}>
              {props => <div className="name-text" style={props}>Olson</div>}
            </Spring>
          </span>
          <Spring
            config={{delay: 2000, duration: 2000}}
            from={{ number: 0 }}
            to={{ number: 1 }}>
            {props => <div>{props.number}</div>}
          </Spring>
        </header>
      </div>
    );
  }
}

export default App;

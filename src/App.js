import React, { Component } from 'react';
import First from './First.js'
import Trails from './Trails.js'
import Toggler from './Toggler.js'
import TrailsSecond from './TrailsSecond.js'
import logo from './logo.svg';
import './App.css';
import './index.css';

import { Spring, Transition, Trail, config } from 'react-spring'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Trails />
          <TrailsSecond />
          <div className='circle'></div>
          <First />
          <Spring config={{ tension: 180, friction: 12, delay: 1000 }} from={{ opacity: 0, color: 'white', marginRight: -1000 }} to={{ opacity: 0.8, color: 'red', marginRight: 0 }}>
            {props => <div className="name-text" style={props}>Steve</div>}
          </Spring>
          <span>
            <Spring config={{delay: 1500}} from={{ opacity: 0, marginLeft: -1000 }} to={{ opacity: 1, marginLeft: 0 }}>
              {props => <div className="name-text" style={props}>Olson</div>}
            </Spring>

          </span>
        </header>
      </div>
    );
  }
}

export default App;

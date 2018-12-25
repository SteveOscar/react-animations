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
          <Toggler />
          'Experience'
          <br/>
          <br/>
          <Toggler />
        </header>
      </div>
    );
  }
}

export default App;

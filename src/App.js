import React, { Component } from 'react';
import First from './First.js'
import Circle from './Circle.js'
import Dropdown from './Dropdown.js'
import Trails from './Trails.js'
import Toggler from './Toggler.js'
import Flipper from './Flipper.js'
import TrailsSecond from './TrailsSecond.js'
import logo from './logo.svg';
import './App.css';
import './index.css';

import { Spring, Transition, Trail, config } from 'react-spring'

const styles = {
  background: { height: '100%', width: '100%', position: 'absolute' },
}
const Background = ({ start, end, stop }) => (
  // <div style={{ ...styles.container, background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)` }}>
  <div style={{ ...styles.background, background: `linear-gradient(to top, ${start} ${stop}, ${end} 100%)` }}>
  </div>
)

class App extends Component {
  state = { toggle: true }

  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  clickDetected = () => this.toggle()

  render() {
    const toggle = this.state.toggle
    return (
      <div className="App">
        <header className="App-header">
          <Spring
            to={{
              start: toggle ? 'black' : 'white',
              end: toggle ? 'white' : 'black',
              stop: toggle ? '90%' : '10%'
            }}
            children={Background}
          />
          <Dropdown />
          <Circle clickDetected={this.clickDetected} />
          <Toggler clickDetected={this.clickDetected} />
          Experience
          <br/>
          <br/>
          <Flipper clickDetected={this.clickDetected} />
        </header>
      </div>
    );
  }
}

export default App;

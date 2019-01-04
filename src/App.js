import React, { Component } from 'react';
import Circle from './Circle.js'
import Dropdown from './Dropdown.js'
import MainCircle from './components/MainCircle'
import './App.css';
import './index.css';

import { Spring, Transition, Trail, config } from 'react-spring'

const styles = {
  background: { height: '100%', width: '100%', position: 'absolute' },
}
const Background = ({ start, end, stop }) => (
  // <div style={{ ...styles.container, background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)` }}>
  <div style={{ ...styles.background, background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)` }}>
  </div>
)

class App extends Component {
  state = { toggle: true }

  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  clickDetected = () => this.toggle()

  render() {
    const toggle = this.state.toggle
    const start = toggle ? '#B2DBBF' : '#B2DBBF'
    const stop = toggle ? '0%' : '50%'
    const end = toggle ? '#247BA0' : '#F3FFBD'
    return (
      <div className="App">
        <header className="App-header">
          <Spring
            to={{
              // start: toggle ? '#B2DBBF' : '#B2DBBF',
              // end: toggle ? '#247BA0' : '#F3FFBD',
              start: toggle ? 'red' : 'black',
              end: toggle ? 'blue' : 'black',
              stop: toggle ? '0%' : '50%'
            }}
            children={Background}
          />
          <Dropdown />
          <MainCircle clickDetected={this.clickDetected} />
        </header>
      </div>
    );
  }
}

export default App;

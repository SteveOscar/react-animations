//
import React, { Component } from 'react';
import './App.css';
import { Spring, config } from 'react-spring';

class Dropdown extends Component {
  render() {
    return (

        <Spring
          config={{ tension: 100, friction: 110 }}
          from={{ opacity: 0, marginTop: -1000 }}
          to={{ opacity: 1, marginTop: 0 }}
        >
          { props => (
            <div  className="App" style={ props } />
            )
          }
        </Spring>
    );
  }
}

export default Dropdown;

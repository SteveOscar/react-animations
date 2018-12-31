import React from 'react'
import { Spring, animated, interpolate } from 'react-spring'
import './index.css'
import Flipper from './Flipper.js'


export default class First extends React.PureComponent {
  state = { toggle: true }

  toggle = () => {
    this.props.clickDetected()
    this.setState(state => ({ toggle: !state.toggle }))
  }

  clickDetected = () => this.toggle()

  render() {
    const { toggle } = this.state
    const rotate = toggle ? '0deg' : '180deg'
    const scale = toggle ? 0.3 : 0.7
    return (
      <div className="reveals-main" onClick={this.toggle}>
        <Spring
          from={{
            transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)'
          }}
          to={{
            zIndex: 999,
            width: toggle ? 110 : 150,
            height: toggle ? 110 : 150,
            borderRadius: toggle ? 110 : 30,
            background:  toggle ? "white" : "black",
            opacity: toggle ? 0.2 : 0.96,
            position: toggle ? 'inherit' : 'absolute',
            transform: toggle ? 'translate3d(0px,0,0) scale(1) rotateX(0deg)' : 'translate3d(0,0,0) scale(2) rotateX(180deg)'
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
      </div>
    )
  }
}
// transform: toggle ? `translate(50%, 0px)` : `translate(150%, 0px)`

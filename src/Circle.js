import React from 'react'
import { Spring, animated } from 'react-spring'
import './index.css'

export default class First extends React.PureComponent {
  state = { show: true }
  toggle = e => this.setState(state => ({ show: !state.show }))

  componentDidMount() {
    this.interval = setInterval(() => this.toggle(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { show } = this.state
    return (
      <div className="reveals-main" onClick={this.toggle}>
        <Spring
          to={{
            width: show ? 200 : 185,
            height: show ? 200 : 192,
            borderRadius: show ? 200 : 185,
            background:  show ? "radial-gradient(circle, transparent 64%, orange 40%)" : "radial-gradient(circle, transparent 64%, white 40%)",
            position: 'absolute',
            opacity: show ? 0.6 : 0.9
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <Spring
          to={{
            width: show ? 182 : 197,
            height: show ? 182 : 204,
            borderRadius: show ? 182 : 204,
            background:  show ? "radial-gradient(circle, transparent 64%, black 40%)" : "radial-gradient(circle, transparent 64%, blue 40%)",
            position: 'absolute',
            opacity: show ? 0.9 : 0.6
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <Spring
          to={{
            width: show ? 178 : 200,
            height: show ? 183 : 195,
            borderRadius: show ? 178 : 195,
            background:  show ? "radial-gradient(circle, transparent 64%, red 40%)" : "radial-gradient(circle, transparent 64%, green 40%)",
            position: 'absolute',
            opacity: show ? 0.6 : 0.2
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
      </div>
    )
  }
}

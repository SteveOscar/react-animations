import React from 'react'
import { Spring, animated } from 'react-spring'
import './index.css'

export default class First extends React.PureComponent {
  state = {
    show1: true,
    show2: true,
    show3: true
  }
  toggle1 = e => this.setState(state => ({ show1: !state.show1 }))
  toggle2 = e => this.setState(state => ({ show2: !state.show2 }))
  toggle3 = e => this.setState(state => ({ show3: !state.show3 }))

  componentDidMount() {
    this.interval = setInterval(() => this.toggle1(), 500);
    this.interval = setInterval(() => this.toggle2(), 600);
    this.interval = setInterval(() => this.toggle3(), 800);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { show1, show2, show3 } = this.state
    return (
      <div className="reveals-main" onClick={this.toggle}>
        <Spring
          to={{
            width: show1 ? 200 : 185,
            height: show1 ? 200 : 192,
            borderRadius: show1 ? 200 : 185,
            background:  show1 ? "radial-gradient(circle, transparent 64%, orange 40%)" : "radial-gradient(circle, transparent 64%, white 40%)",
            position: 'absolute',
            opacity: show1 ? 0.6 : 0.9
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <Spring
          to={{
            width: show2 ? 182 : 197,
            height: show2 ? 182 : 204,
            borderRadius: show2 ? 182 : 204,
            background:  show2 ? "radial-gradient(circle, transparent 64%, black 40%)" : "radial-gradient(circle, transparent 64%, blue 40%)",
            position: 'absolute',
            opacity: show2 ? 0.9 : 0.6
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <Spring
          to={{
            width: show3 ? 178 : 200,
            height: show3 ? 183 : 195,
            borderRadius: show3 ? 178 : 195,
            background:  show3 ? "radial-gradient(circle, transparent 64%, red 40%)" : "radial-gradient(circle, transparent 64%, green 40%)",
            position: 'absolute',
            opacity: show3 ? 0.6 : 0.2
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
      </div>
    )
  }
}

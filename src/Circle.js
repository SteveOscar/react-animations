import React from 'react'
import { Spring, animated, config } from 'react-spring'
import './index.css'
import Flipper from './Flipper.js'
import DivFlipper from './DivFlipper.js'

const baseHeight = 100
const baseHeight1 = baseHeight*.97
const baseHeight2 = baseHeight*.92
const baseHeight3 = baseHeight*.85
const baseHeight4 = baseHeight*.9
const baseRadius = baseHeight / 2
const baseRadius1 = baseRadius1*.9
const baseRadius2 = baseRadius1*.8

// muted
const colors1 = {
  first: '#8DA7BE',
  second: '#554640',
  third: '#CDE6F5',
  fourth: '#87919E',
  fifth: '#707078',
  sixth: '#32353A',
}
// bright
const colors2 = {
  first: 'yellow',
  second: 'white',
  third: 'blue',
  fourth: 'red',
  fifth: 'white',
  sixth: 'green',
}

export default class First extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      show1: true,
      show2: true,
      show3: true,
      toggle: true
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    const rand1 = Math.floor(Math.random() * (600 - 500 + 1)) + 500
    const rand2 = Math.floor(Math.random() * (700 - 600 + 1)) + 600
    const rand3 = Math.floor(Math.random() * (800 - 700 + 1)) + 700
    this.interval = setInterval(() => this.toggle1(), rand1);
    this.interval = setInterval(() => this.toggle2(), rand2);
    this.interval = setInterval(() => this.toggle3(), rand3);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  toggle1 = e => this.setState(state => ({ show1: !state.show1 }))
  toggle2 = e => this.setState(state => ({ show2: !state.show2 }))
  toggle3 = e => this.setState(state => ({ show3: !state.show3 }))

  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  clickDetected = () => this.toggle()

  render() {
    const { show1, show2, show3, width, height } = this.state
    const { clickDetected } = this.props
    // change color scheme with this var
    const colors = colors2

    return (
      <div className="reveals-main" onClick={this.toggle} style={{height: '300px'}}>


        <Spring
          config={config.slow}
          to={{
            width: show1 ? baseHeight : baseHeight1,
            height: show1 ? baseHeight : baseHeight2,
            borderRadius: show1 ? baseRadius : baseRadius2,
            background:  show1 ? `radial-gradient(circle, transparent 64%, ${colors.first} 40%)` : `radial-gradient(circle, transparent 64%, ${colors.second} 40%)`,
            position: 'absolute',
            opacity: show1 ? 0.6 : 0.9
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <Spring
          config={config.slow}
          to={{
            width: show2 ? baseHeight4 : baseHeight1,
            height: show2 ? baseHeight3 : baseHeight1,
            borderRadius: show2 ? baseRadius : baseRadius2,
            background:  show2 ? `radial-gradient(circle, transparent 64%, ${colors.third} 40%)` : `radial-gradient(circle, transparent 64%, ${colors.fourth} 40%)`,
            position: 'absolute',
            opacity: show2 ? 0.9 : 0.6
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <Spring
          config={config.slow}
          to={{
            width: show3 ? baseHeight3 : baseHeight,
            height: show3 ? baseHeight3 : baseHeight1,
            borderRadius: show3 ? baseRadius : baseRadius2,
            background:  show3 ? `radial-gradient(circle, transparent 64%, ${colors.fifth} 40%)` : `radial-gradient(circle, transparent 64%, ${colors.sixth} 40%)`,
            position: 'absolute',
            opacity: show3 ? 0.6 : 0.2
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <DivFlipper width={width} height={height} clickDetected={clickDetected} />
      </div>
    )
  }
}

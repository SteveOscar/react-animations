import React from 'react'
import { Spring, animated, config } from 'react-spring'
import '../index.css'

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

export default class MainCicle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      show1: true,
      show2: true,
      toggle: true
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.interval = setTimeout(() => this.setState({show1: false}), 1500);
    this.interval = setTimeout(() => this.setState({show2: false}), 1800);
    this.interval = setTimeout(() => this.props.clickDetected(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggle1 = e => this.setState(state => ({ show2: !state.show2 }))

  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  clickDetected = () => this.toggle()

  render() {
    const { show1, show2, width, height } = this.state
    const { clickDetected } = this.props
    // change color scheme with this var
    const colors = colors2

    return (
      <div className="reveals-main" onClick={this.toggle1} style={{zIndex: 2}}>
        <Spring
          config={config.slow}
          to={{
            width: show1 ? baseHeight : width,
            height: show1 ? baseHeight : height,
            borderRadius: show1 ? baseRadius : baseHeight,
            background:  show1 ? `radial-gradient(circle, transparent 64%, ${colors.second} 40%)` : `radial-gradient(circle, transparent 64%, ${colors.fifth} 40%)`,
            position: 'absolute',
            opacity: show1 ? 0.8 : 0.95
          }}>
          {props => <animated.div style={props}></animated.div>}
        </Spring>
        <Spring
          config={config.rubber}
          to={{
            opacity: show2 ? 0 : 0.9,
            fontFamily: 'ZCOOL XiaoWei',
            fontSize: '5em'
          }}>
          {props => <animated.span style={props}>Hello World</animated.span>}
        </Spring>
      </div>
    )
  }
}

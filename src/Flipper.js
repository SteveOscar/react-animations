import React from 'react'
import { Spring, animated, interpolate } from 'react-spring'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
  },
  shape: { width: 300, height: 300, willChange: 'transform' },
}

class Flipper extends React.Component {
  state = { toggle: true }
  toggle = () => {
    this.props.clickDetected()
    this.setState(state => ({ toggle: !state.toggle }))
  }
  componentDidMount() {
    //setInterval(() => this.forceUpdate(), 1000)
  }
  render() {
    const toggle = this.state.toggle
    return (
      <Spring
        native
        from={{ zIndex: '999', fill: 'black' }}
        to={{
          fill: toggle ? 'rgba(124,240,10,0.5)' : 'rgba(0,0,0,0.8)',
          // backgroundColor: toggle ? '#A29B7F' : '#F3FFBD',
          backgroundColor: 'transparent',
          rotate: toggle ? '0deg' : '180deg',
          scale: toggle ? 0.3 : 0.7,
          shape: toggle ? TRIANGLE : RECTANGLE,
          border: '5px solid black',
          zIndex: '999'
        }}
        toggle={this.toggle}>
        {({ toggle, backgroundColor, fill, rotate, scale, shape }) => (
          <animated.div style={{ ...styles.container, backgroundColor }}>
            <animated.svg
              style={{
                ...styles.shape,
                fill,
                transform: interpolate(
                  [rotate, scale],
                  (r, s) => `rotate3d(0,1,0,${r}) scale(${s})`
                ),
              }}
              version="1.1"
              viewBox="0 0 400 400">
              <g
                style={{ cursor: 'pointer' }}
                fillRule="evenodd"
                onClick={this.toggle}>
                <animated.path id="path-1" d={shape} />
              </g>
            </animated.svg>
          </animated.div>
        )}
      </Spring>
    )
  }
}

export default Flipper

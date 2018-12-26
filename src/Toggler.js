import React from 'react'
import { Spring } from 'react-spring'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const CIRCLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
  container: { marginBottom: '-90px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'background' },
  shape: { width: 300, height: 300, willChange: 'transform' }
}

const Content = ({ toggle, color, scale, shape, start, end, stop, rotation, opacity }) => (
  // <div style={{ ...styles.container, background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)` }}>
  <div style={{ ...styles.container, background: `transparent` }}>
    <svg
      style={{ ...styles.shape, transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation})` }}
      version="1.1"
      viewBox="0 0 400 400">
      <g style={{ cursor: 'pointer' }} fill={color} fillRule="evenodd" onClick={toggle}>
        <path id="path-1" d={shape} />
      </g>
    </svg>
    <span style={{position: 'absolute', color: '#282c34', opacity: opacity}}>
      Scarlett <br/> Merry Christmas!!
      
    </span>
  </div>
)
// export default class Toggler extends React.PureComponent {
class Toggler extends React.Component {
  state = { toggle: true }
  toggle = () => {
    this.props.clickDetected()
    this.setState(state => ({ toggle: !state.toggle }))
  }
  render() {
    const toggle = this.state.toggle
    return (
      <div onClick={this.toggle}>
      <Spring
        from={{ color: 'white' }}
        to={{
          color: toggle ? '#247BA0' : '#70C1B3',
          start: toggle ? '#B2DBBF' : '#B2DBBF',
          end: toggle ? '#247BA0' : '#F3FFBD',
          scale: toggle ? 0.2 : 1.5,
          shape: toggle ? CIRCLE : RECTANGLE,
          stop: toggle ? '0%' : '50%',
          rotation: toggle ? '0deg' : '45deg',
          opacity: toggle ? 0 : 1
        }}
        toggle={this.toggle} // Additional props will be spread over the child
        children={Content} // Render prop
      />
      </div>
    )
  }
}

export default Toggler;

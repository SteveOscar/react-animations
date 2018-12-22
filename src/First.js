import React from 'react'
import { Transition, animated } from 'react-spring'
import './index.css'

export default class First extends React.PureComponent {
  state = { show: true }
  toggle = e => this.setState(state => ({ show: !state.show }))
  render() {
    return (
      <div className="reveals-main" onClick={this.toggle}>
        <Transition
          native
          items={this.state.show}
          from={{ top: 20, position: 'absolute', overflow: 'hidden', height: 0 }}
          enter={[{ height: 'auto' }]}
          leave={{ top: 20, height: 10 }}>
          {show =>
            show && (props => <animated.div style={props}>Click</animated.div>)
          }
        </Transition>
      </div>
    )
  }
}
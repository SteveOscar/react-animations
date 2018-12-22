import React from 'react'
import { Transition, Trail, animated } from 'react-spring'
import './index.css'
const items = ['h', 'e', 'l', 'l', 'o']
export default class TrailsSecond extends React.PureComponent {
  state = { show: true }
  toggle = e => this.setState(state => ({ show: !state.show }))
  render() {
    return (
      <div className="reveals-main" onClick={this.toggle}>
        <Trail
          items={items} keys={item => item.key}
          from={{ transform: 'translate3d(0,-40px,0)' }}
          to={{ transform: 'translate3d(0,0px,0)' }}>
          {item => props =>
            <span style={props}>{item}</span>
          }
        </Trail>
      </div>
    )
  }
}
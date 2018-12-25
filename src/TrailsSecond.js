import React from 'react'
import { Transition, Trail, animated } from 'react-spring'
import './index.css'
const items = ['h', 'e', 'l', 'l', 'o']
export default class TrailsSecond extends React.PureComponent {
  state = { show: true }
  toggle = e => {
    console.log('HI')
    this.setState(state => ({ show: !state.show }))
  }
  render() {
    return (
      <div className="trails-main" onClick={this.toggle}>
        <Trail
          items={items} keys={item => item.key}
          from={{ opacity: 0, transform: 'translate3d(-40px,-40px,0)' }}
          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}>
          {item => props =>
            <span style={props}>{item}</span>
          }
        </Trail>
      </div>
    )
  }
}
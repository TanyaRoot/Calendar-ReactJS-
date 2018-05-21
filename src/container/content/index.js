import React, { Component } from 'react';
import './index.css'
import Calendar from './calendar'
import Log from './log'

class Content extends Component {
  render() {
    return (
      <div className='content z-depth-2'>

        <Calendar />
        <Log />
      </div>
    )
  }
}

export default Content;

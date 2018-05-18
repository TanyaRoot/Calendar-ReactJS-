import React, { Component } from 'react';
import './content.css'
import Calendar from './calendar'
import Log from './log'


class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Calendar />
        <Log />
      </div>
    )
  }
}

export default Content;

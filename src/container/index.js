import React, { Component } from 'react';
import Header from './header/index'
import Calendar from './calendar/dayPicker'
import './index.css'

class Container extends Component {
  render() {
    return (
      <div className='123'>
        <Header />
        <Calendar />
      </div>
    )
  }
}

export default Container;

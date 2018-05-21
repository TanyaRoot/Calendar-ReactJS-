import React, { Component } from 'react';
import Header from './header/index'
import Content from './content/index'
import './index.css'

class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Container;

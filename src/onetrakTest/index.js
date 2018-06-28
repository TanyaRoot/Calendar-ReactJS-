import React, { Component } from 'react';
import Header from './header/index'
import Container from './container/index'
import  './index.css'


class Page extends Component {



  render() {
    return (
      <div className='bodyTestPage'>
        <Header />
        <Container />
      </div>
    )
  }
}

export default Page;

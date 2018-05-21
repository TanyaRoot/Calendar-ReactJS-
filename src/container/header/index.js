import React, { Component } from 'react';
import './index.css'
import Nav from '../../components/nav'
import ContentName from './contentName'
import Search from './search'
import Buttons from './buttons'
import User from './user'

class Header extends Component {
  render() {
    return (
      <div className='header z-depth-2'>
        <Nav />
        <ContentName />
        <Search />
        <Buttons />
        <User />
      </div>
    )
  }
}

export default Header;

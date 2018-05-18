import React, { Component } from 'react';
import './header.css'
import Nav from '../../components/nav'
import ContentName from './contentName'
import Search from './search'
import Buttons from './buttons'
import User from './user'



class Header extends Component {
  render() {
    return (
      <div className='header'>
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

// import Burger from './burger'
    // <Burger

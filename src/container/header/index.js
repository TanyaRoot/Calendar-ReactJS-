import React, { Component } from 'react';
import './index.css'
import Nav from '../../components/navigation/index'
import ContentName from './contentName'
import Search from './search'
import User from './user'

class Header extends Component {

  render() {
    // console.log('24', this.props);
    return (
      <div className='header z-depth-2'>
        <Nav />
        <ContentName />
        <Search />
        <User getProfilStatus={this.props.getProfilStatus} status={this.props.status} />
      </div>
    )
  }
}

export default Header;

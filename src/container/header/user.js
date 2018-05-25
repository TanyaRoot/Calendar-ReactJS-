import React, { Component } from 'react';
import {Dropdown, Button, NavItem} from 'react-materialize'
import './index.css'

class User extends Component {

  // getProfilStatus(status) {
  //   this.props.getProfilStatus(status)
  // }

  render() {
    // console.log('23', this.props);
    return (
      <div className='user123'>
        <Dropdown trigger={
          <a><img className="dropdown_1  user123" src='../src/img/user.jpg' /></a>
          }>
          <NavItem onClick={() => {this.props.getProfilStatus(!this.props.status)}}><img className="user123" src='../src/img/user.jpg' /></NavItem>
          <NavItem>Rabbit Bo</NavItem>
          <NavItem>rabbitbo@mail.com</NavItem>
        </Dropdown>
      </div>
    )
  }
}

export default User

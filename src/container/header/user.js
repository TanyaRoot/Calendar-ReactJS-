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
      <div className='header--user'>
        <Dropdown className='user--dropdown'trigger={
          <a><img className="dropdown--dropdown_1  user--img" src='../src/img/user.jpg' /></a>
          }>
          <NavItem onClick={() => {this.props.getProfilStatus(!this.props.status)}}>
              <img className="user--img" src='../src/img/user.jpg' />
          </NavItem>
          <NavItem>Rabbit Bo</NavItem>
          <NavItem>rabbitbo@mail.com</NavItem>
        </Dropdown>
      </div>
    )
  }
}

export default User

import React, { Component } from 'react';
import {SideNav, Button, SideNavItem} from 'react-materialize'
import './index.css'

class Nav extends Component {
  render() {
    return (
      <div className="navBurger">
        <SideNav
          trigger={<Button icon='menu'></Button>}
          options={{ closeOnClick: true }}
          >
        <SideNavItem userView
            user={{
              image: '../src/img/user.jpg',
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
        />
        <SideNavItem href='#!icon' icon='event'>Timetable calendar</SideNavItem>
        <SideNavItem href='#!second' icon='format_list_bulleted'>Timetable log</SideNavItem>
        <SideNavItem divider />
        </SideNav>
      </div>
    )
  }
}

export default Nav

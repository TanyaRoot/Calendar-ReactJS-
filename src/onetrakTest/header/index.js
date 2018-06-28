import React, { Component } from 'react';
import  '../../index.css'


class Header extends Component {



  render() {
    return (
      <div className='headerTestPage'>
        <div>
          logo
        </div>

        <ul className='header__menu'>
          <li>МОЙ TRAK</li>
          <li>ДРУЗЬЯ</li>
          <li>СТАТИСТИКА</li>
          <li>МОИ УСТРОЙСТВА</li>
          <li>СОРЕВНОВАНИЯ</li>
        </ul>

        <div>
          <div className='image'></div>
          <span>Mister Robot</span>
        </div>
      </div>
    )
  }
}

export default Header;

import React, { Component } from 'react';
import './index.css';
import {Button, Icon} from 'react-materialize'
// import Header from './header/index'
// import Calendar from './calendar/dayPicker'
// import UserPage from './userPage/userPage'

class Loggin extends Component {

  constructor(props) {
    super(props);
    this.state = {
        usersList: [
          {login: '123',
          password: 'qwe'}
        ]
    }
  }

  handleClick(e) {
    console.log('rrr', this.props);
  }

  render() {
    return (
        <form className='logginSpace z-depth-2'>
          <input type='text'
                 name="login"
                 placeholder='сюда вводишь логин'

                 value={this.state.login}/>
          <input type='password'
                 name="password"
                 placeholder='а сюда пароль'

                 value={this.state.password} />
          <Button waves='light' onClick={(e) => this.handleClick(e)} >LOGIN</Button>
        </form>

    )
  }
}

export default Loggin;

//required
//<input type='email' name="email" placeholder='сюда вводишь логин'required />

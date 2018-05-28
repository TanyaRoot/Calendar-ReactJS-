import React, { Component } from 'react'
import './index.css'
import {Button, icon} from 'react-materialize'

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
  // handleClick(e) {
  //   console.log('rrr', this.props);
  // }

  render() {
    return (
        <form className='logginForm z-depth-2'>
          <input type='text'
                 name="login"
                 placeholder='сюда вводишь логин'
                 />
          <input type='password'
                 name="password"
                 placeholder='а сюда пароль'
                 />
          <Button onClick={() => this.props.getDefaultStatus(!this.props.status)}>LOGIN</Button>
        </form>
    )
  }
}

export default Loggin;

//required
//<input type='email' name="email" placeholder='сюда вводишь логин'required />
//value={this.state.login}

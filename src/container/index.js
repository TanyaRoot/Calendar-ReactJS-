import React, { Component } from 'react';
import Header from './header/index'
import Calendar from './calendar/dayPicker'
import UserPage from './userPage/userPage'

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profilStatus: false
    }
  }

  getProfilStatus = (status) => {
    this.setState({profilStatus: status})
    // console.log('status', status);
  }

  render() {
    return (
      <div className='123'>
        <Header getProfilStatus={this.getProfilStatus} status={this.state.profilStatus}/>
        {this.state.profilStatus
           ?
            <UserPage getProfilStatus={this.getProfilStatus} status={this.state.profilStatus} />
           :
           <Calendar />
         }
      </div>
    )
  }
}

export default Container;

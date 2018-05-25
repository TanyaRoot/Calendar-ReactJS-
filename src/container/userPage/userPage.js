import React, { Component } from 'react';

class UserPage extends Component {

  // getProfilStatus(status) {
  //   this.props.getProfilStatus(status)
  // }

  render() {
    // console.log('25', this.props);
    return(
      <div>
        <h1>JOPA</h1>
        <button onClick={() => {this.props.getProfilStatus(!this.props.status)}} >V CALENDAR</button>
      </div>
    )
  }
}

  export default UserPage

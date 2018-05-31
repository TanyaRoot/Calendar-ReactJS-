import React, { Component } from 'react';

class UserPage extends Component {
// constructor(props) {
//   super(props);
//   this.getDefaultStatus = this.getDefaultStatus.bind(this);
//   this.state = {
//     open: false
//   }
// }

  // getTest() {
  //   console.log('chtobvas', !this.props.status);
  //   console.log('status', status);
  //   const {open} = this.state
  //   if (status === true) {
  //     return (
  //       console.log('ya tyt', this)
  //
  //     )
  //   } else {
  //     console.log('ya tdes', this)
  //     return null
  //   }
  //   this.setState({open: status})
  // }

  // getDefaultStatus = (status) => {
  //   // const { open } = this.stat
  //   console.log('status', open);
  //   this.setState({open: status})
  //
  // }

  render() {
    // console.log('25', this.props);
// console.log('pidr', this.props.status);
    return(

      <div className="userPage">
        <h1>JOPA</h1>
        <button onClick={() => {this.props.getProfilStatus(!this.props.status)}} >V CALENDAR</button>
        {this.getTest}
      </div>

    )
  }
}

  export default UserPage

  //        <button onClick={() => {this.props.getProfilStatus(!this.props.status)}}>TEST</button>

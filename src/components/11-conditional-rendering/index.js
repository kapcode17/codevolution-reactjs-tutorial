import React, { Component } from 'react'

class ConditionalRendering extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }

  render() {
    /*
    if (this.state.isLoggedIn) {
      return <div>Logged In</div>
    } else {
      return <div>Not Logged In</div>
    }
    */


    /*
    let message
    if(this.state.isLoggedIn) {
      message = <div>Logged In</div>
    } else {
      message = <div>Not Logged In</div>
    }
    return <div>{message}</div>
    */


    //===== conditional rendering =====
    /*
    return (
      this.state.isLoggedIn ? <div>Logged In</div> : <div>Not Logged In</div>
    )
    */


    return this.state.isLoggedIn && <div>Logged In</div>
  }
}

export default ConditionalRendering
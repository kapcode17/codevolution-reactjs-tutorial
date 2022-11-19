
//Mounting means putting elements into the DOM.

import React, { Component } from 'react'

export class Mounting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'kap'
    }

    console.log('LifecycleA constructor')
  }

  

  render() {
    return (
      <div>Mounting</div>
    )
  }
}

export default Mounting
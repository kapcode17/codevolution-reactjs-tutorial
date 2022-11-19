import React, { Component } from 'react'
import { MethodInProps } from './test';

export class MethodsAsProps extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       waifuName: 'asuka'
    }

    this.greetWaifu = this.greetWaifu.bind(this);
  }

  greetWaifu(extra) {
    alert('hello ' + this.state.waifuName + extra)
  }

  render() {
    return (
      <div>
        <MethodInProps greetHandler={this.greetWaifu} />
      </div>
    )
  }
}

export default MethodsAsProps
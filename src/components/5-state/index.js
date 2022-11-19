import React, {Component} from 'react'

class MyState extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome Guys'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thanks for sub'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default MyState
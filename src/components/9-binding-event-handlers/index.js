import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    //use for bind 3
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      message: 'Goodbye'
    })

    console.log(this)
  }

  //use for bind 4
  clickHandlerProp = () => {
    this.setState({
      message: 'Goodlife'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Bind 1</button>
        <button onClick={this.clickHandler.bind(this)}>Bind 2</button>
        <button onClick={this.clickHandler}>Bind 3</button>
        <button onClick={this.clickHandlerProp}>Bind 4</button>
      </div>
    )
  }
}

export default EventBind
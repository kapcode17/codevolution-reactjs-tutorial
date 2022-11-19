import React, { Component } from 'react'

function MyEventHandling() {
  function clickHandler(){
    console.log('button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default MyEventHandling

export class MyEventHandling2 extends Component {
  clickHandler() {
    console.log('btn clicked')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}
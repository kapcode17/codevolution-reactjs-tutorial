import React, { Component } from 'react'

class MySetState extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    },
    () => {
      console.log('callback value:', this.state.count)
    }
    )

    console.log(this.state.count);
  }

  incrementV2() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))

    console.log(this.state.count);
  }

  incrementFive() {
    this.incrementV2();
    this.incrementV2();
    this.incrementV2();
    this.incrementV2();
    this.incrementV2();
  }

  render() {
    return (
      <div>
        <div>Count = {this.state.count}</div>
        <button onClick={() => this.increment()}>+1</button>
        <br />
        <button onClick={() => this.incrementFive()}>+5</button>
      </div>
    )
  }
}

export default MySetState
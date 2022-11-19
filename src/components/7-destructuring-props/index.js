import React, { Component } from 'react'

export const MyDestructuringProps1 = ({name, relation}) => {
  return (
    <div>
      <h1>C1: Hello {name}, My {relation}</h1>
    </div>
  )
}

export const MyDestructuringProps2 = props => {
  const {name, relation} = props
  return (
    <div>
      <h1>C2: Hello {name}, My {relation}</h1>
    </div>
  )
}

export class MyDestructuringProps3 extends Component {
  render() {
    const {name, relation} = this.props
    return (
      <div>
        <h1>C3: Hello {name}, My {relation}</h1>
      </div>
    )
  }
}

import React from 'react'

const MyProps = props => {
  return (
    <div>
      <h1>Hello {props.name}, My {props.relation}</h1>
      {props.children}
    </div>
  )
}

export default MyProps
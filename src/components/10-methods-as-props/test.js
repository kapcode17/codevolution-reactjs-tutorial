import React from 'react'

// use for 10MethodsAsProps
export function MethodInProps(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler(' i miss u')}>Greet Waifu</button>
    </div>
  )
}
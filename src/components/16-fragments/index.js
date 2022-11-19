import React from 'react'

function Fragment() {
  const fruits = ['apple', 'banana', 'mango']

  return (
    <>
      <h1>{'<></> and <React.Fragment></React.Fragment> is fragment'}</h1>
      {fruits.map((fruit, index) => <React.Fragment key={index}><h2>Fruit: </h2><h5>{fruit}</h5></React.Fragment>)}
    </>
  )
}

export default Fragment
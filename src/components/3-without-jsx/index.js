import React from "react";

const WithoutJSX = () => {
  return React.createElement(
    'div',
    {id: 'myId', className: 'myClass'},
    React.createElement('h1', null, 'Dis Without JSX')
  )
}

export default WithoutJSX
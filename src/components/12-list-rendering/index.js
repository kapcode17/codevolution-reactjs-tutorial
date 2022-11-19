import React from 'react'

function ListRendering() {
  /*
  const names = ['Fiammetta', 'Texas', 'Hua']
  const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {nameList}
    </div>
  )
  */

  const waifus = [{name: 'Fiammetta', id: '01'}, {name: 'Texas', id: '02'}, {name: 'Hua', id: '03'}]
  const waifuList = waifus.map((waifu, index) => <h2 key={index}>{index} {waifu.name} <small><i>id:</i> {waifu.id}</small></h2>)
  return (
    <div>
      {waifuList}
    </div>
  )
}

export default ListRendering
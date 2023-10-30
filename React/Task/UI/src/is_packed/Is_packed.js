import React from 'react'
import Item from './Item'

const Is_packed = () => {
  return (
    <div>
        <h3>ToDo_List</h3>
        <Item ispacked={true} name="Bottle"/>
        <Item ispacked={true} name="LapTop"/>
        <Item ispacked={false} name="bag"/>
    </div>
  )
}

export default Is_packed
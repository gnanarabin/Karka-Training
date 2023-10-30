import React from 'react'

const Item = (props) => {
  return (
    <div>
        <h5>{props.name}{props.ispacked ? ('✔'):(" ✖")}</h5>
    </div>
  )
}

export default Item
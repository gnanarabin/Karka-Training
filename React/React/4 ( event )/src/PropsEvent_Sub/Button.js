import React from 'react'

const Button_sub = (props) => {
  return (
    <div>
        <button onClick={props.onplaymovie}>Movie</button>
        <button onClick={props.uploadimg}>Img</button>
    </div>
  )
}

export default Button_sub
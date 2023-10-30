import React from 'react'
import Button from './Button'

const ToolBar = (props) => {
  console.log(props);
  return (
    <div>
        <Button onClick={props.onplaymovie}>Play Movie</Button>
        <Button onClick={props.uploadimg}>Upload Img</Button>
    </div>
  )
}

export default ToolBar
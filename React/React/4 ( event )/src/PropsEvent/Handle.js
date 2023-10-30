import React from 'react'
import ToolBar from './ToolBar'

const Handle = () => {
// function Handle(){
    function handle_play_movie(){
        alert("handle play movie")
    }

    function  handle_upload_img(){
        alert("upload img")
    }
  return (
    <div>
        <ToolBar onplaymovie={handle_play_movie} uploadimg={handle_upload_img}/>
    </div>
  )
}

export default Handle
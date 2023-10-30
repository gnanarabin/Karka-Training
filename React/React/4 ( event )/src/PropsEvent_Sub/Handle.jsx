import React from 'react'
import Button_sub from './Button'

const Handle_sub = () => {
    function handle_play_movie(){
        alert("play movie")
    }
    function handle_upload_img(){
        alert("upload img")
    }
  return (
    <div>
        <Button_sub onplaymovie={handle_play_movie} uploadimg={handle_upload_img}></Button_sub>
    </div>
  )
}

export default Handle_sub
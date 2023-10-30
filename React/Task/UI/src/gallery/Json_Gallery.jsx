import React from 'react'
import img from '../bird.jpg'

// const person={
//     name:"Rabin JN",
//     age:22,
//     theme:{
//         backgroundColor:"black",
//         color:"white"
//     }
//   };
  


const Json_Gallery = (props) => {
  return (
    <div style={props.data.theme}>
        <h1>{props.data.name}</h1>
        <img src={img} alt='bird' height={200} width={200}></img>
    </div>
  )
}

export default Json_Gallery
import React from 'react';
import img from '../bird.jpg'


const Gallery = () => {
  return (
    <div>
        <img src={img} alt='bird' height={200} width={200}></img>
        <img src={img} alt='bird' height={200} width={200}></img>
        <img src={img} alt='bird' height={200} width={200}></img>
    </div>
  )
}

export default Gallery
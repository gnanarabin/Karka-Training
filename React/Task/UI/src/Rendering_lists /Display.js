import React from 'react'
import {people} from './json'
import Image_url from './Image_Url';

const Display = () => {
    console.log(people);
    const listItem=people.map(ele=>(
        <li>{ele.id}
            <Image_url/>
            <p><b>{ele.name}</b>{ " " + ele.accomplishment }</p>
        </li>
    ))
    
  return (
    <div>
        <h3>Img</h3>
        <ul>{listItem}</ul>
    </div>
  )
}

export default Display
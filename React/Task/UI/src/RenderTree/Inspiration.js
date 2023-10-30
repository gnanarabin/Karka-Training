import React, { Children, useState } from 'react'
import {list} from './List'
import FancyText from './FancyText';

const Inspiration = ({children}) => {
    const [index,setIndex]=useState(0);
    const quote = list [index];

    
    function next(){
        (index>list.length-2) ? setIndex(0) : setIndex(index+1)
    }
   
  return (
    <div>
        <p>Your Lists :</p>
        <FancyText text={quote}/>
        <button onClick={next}>Next</button>
        {children}
    </div>
  )
}

export default Inspiration
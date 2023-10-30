import React from 'react'
import profimg from '../img/2390380.jpg'

const Avatar = ({person},{src}) => {
    // function list_iteral(){
    //     return(
    //         <>
    //             <li>{person.name}</li>
    //             <li>{person.age}</li>
    //             <li>{person.place}</li>
    //         </>
    //     )
    // }
        
  return (
    <div>
        {/* <img src={src.profimg}></img> */}
        {/* <img src={profimg} width={300} height={300}></img> */}
        {/* <ul>{list_iteral}</ul> */}
        <ul>
            <li>{person.name}</li>
            <li>{person.age}</li>
            <li>{person.place}</li>
        </ul>
    </div>
  )
}

export default Avatar
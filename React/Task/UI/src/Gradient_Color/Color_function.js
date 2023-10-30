import React from 'react'

const Color_function = ({colors}) => {
    let color=colors.map((ele)=>{
        return(
            <div className='grid'>
                <div className='row'>
                    <div className='col col-2' style={{backgroundImage: `linear-gradient(0deg, ${ele.from}, ${ele.to})`,}}></div>
                </div>
            </div>
        )
        
    })
  return (
    <div>{color}</div>
  )
}

export default Color_function
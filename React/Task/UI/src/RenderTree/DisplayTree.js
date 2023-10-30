import React from 'react'
import FancyText from './FancyText'
import CopyRight from './CopyRight'
import Inspiration from './Inspiration'

const DisplayTree = () => {
  return (
    <div>
        <FancyText text="Render Tree"/>
        <Inspiration>
          <CopyRight year={2004}/>
        </Inspiration>
        
    </div>
  )
}

export default DisplayTree
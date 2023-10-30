import React from 'react'

const Display_list = ({datas}) => {
    const list=datas.data.map(ele=>(

      
        <div>
            <li style={{"backgroundColor":"red","padding":30,"listStyle":"none"}}>{ele.name}</li>

            <img src={ele.image} width={400} height={400}></img>

        </div>
    ))
    
  return (
    <div>
      <ul>{list}</ul>
    </div>
  )
}

export default Display_list
import React from 'react'
import data_json from './data.json'
import Display_list from './Display_list'



const Get = () => {
  return (
    <div>
        <Display_list datas={data_json}/>
    </div>
  )
}

export default Get
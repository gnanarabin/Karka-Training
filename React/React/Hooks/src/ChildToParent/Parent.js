import { useState } from "react"
import Child from "./Child"

const Parent =()=>{

    const [color,setColor]=useState("")

    // const getcolor=(color)=>{
    //     setColor(color)
    //     console.log(color);

    // }
    return (
        <div className=" w-100 h-50  justify-content-center">
            <div className="w-25 h-25 " style={{background: `${color}`}}>
                 hvjg
            </div>
            <br></br>
            <Child className="d-block" setColor={setColor}/>

        </div>
        
        
    )
}

export default Parent
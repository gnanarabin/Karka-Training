import {React,useEffect} from 'react'



const Button = (props) => {
    // useEffect(()=>{
    //     alert("rabin")
    // })
    console.log(props);
  return (
    <div>
        <button onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button
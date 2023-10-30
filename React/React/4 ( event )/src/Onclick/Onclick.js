import React, { useRef } from 'react'

const Onclick = () => {
    // const count = useRef(0)

    function handle_click(){
    //     alert(count.current)
    //     count.current = count.current + 1
    //     alert("You clicked "+ count.current + 'times... ')
        
        // try{
        //   let a = 5 , b=10
        //   var c = a+b
        //   console.log(c)
        // }
        // catch(e){
        //   alert(e)
        // }
        // finally{
        //   console.log("helloo")
        // }

        alert("Welcome")

    }
  return (
    <div>
        <button onClick={handle_click}>Click</button>
    </div>
  )
}

export default Onclick
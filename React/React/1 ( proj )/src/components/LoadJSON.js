import DisplayJSONValue from "./DisplayJSONValue"
 

// function MyButton() {


//     return (
//       // console.log(props)
      
//       <button>
        
//       </button>
//     );
//   }
// export default MyButton()
export default function LoadJSON(){
  
  const data={
        name:"rabin",
        age:22,
        place:"ngl"
  }
  return (
    <div>
      <DisplayJSONValue data ={data}/>
    </div>
  )
}
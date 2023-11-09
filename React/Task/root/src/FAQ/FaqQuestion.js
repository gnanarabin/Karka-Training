// import React, { useState } from 'react'

// const FaqQuestion = () => {
//     const [ans, setAns] = useState("")
//     const [index, setIndex] = useState("")

//     const [data, setData] = useState(
//         [
//             {
//                 question: "how many legs dog have ?",
//                 options: ["two", "four", "six", "eight"],
//                 answer: "four"
//             },
//             {
//                 question: "who know all programming language in karaka academy ?",
//                 options: ["Rabin", "Subin", "Dhanush", "SreeRam"],
//                 answer: "Subin"
//             },

//         ]
//     )

//     function handle_click(OptionIndex, QuestionIndex) {
//         setIndex(OptionIndex)
//         setAns(data[QuestionIndex].options[OptionIndex])
//         console.log("ans", ans);
//     }



//     return (
//         <div className='quiz'>
//             {data.map((prev, QuestionIndex) => (
//                 <div key={QuestionIndex}>
//                     <h1>{prev.question}</h1>
//                     <ol>
//                         {prev.options.map((option, OptionIndex) => (
//                             <li key={OptionIndex}><button onClick={() => handle_click(OptionIndex, QuestionIndex)}>{option}</button></li>
//                         ))}
//                         <p>
//                             {OptionIndex === index
//                                 ? option === ans
//                                     ? "correct"
//                                     : "wrong"
//                                 : ""}
//                         </p>
//                     </ol>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default FaqQuestion
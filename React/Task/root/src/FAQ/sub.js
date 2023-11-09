// import React, { useState } from 'react';

// const FaqQuestion = () => {
//     const [ans, setAns] = useState("");
//     const [index, setIndex] = useState("");

//     const [data, setData] = useState([
//         {
//             question: "how many legs does a dog have?",
//             options: ["two", "four", "six", "eight"],
//             answer: "four"
//         },
//         {
//             question: "who knows all programming languages in Karaka Academy?",
//             options: ["Rabin", "Subin", "Dhanush", "SreeRam"],
//             answer: "Subin"
//         }
//     ]);

//     const [correctness, setCorrectness] = useState([]);

//     function handle_click(OptionIndex, QuestionIndex) {
//         setIndex(OptionIndex);
//         setAns(data[QuestionIndex].options[OptionIndex]);

//         const isCorrect = data[QuestionIndex].options[OptionIndex] === data[QuestionIndex].answer;
//         const newCorrectness = [...correctness];
//         newCorrectness[QuestionIndex] = isCorrect;
//         setCorrectness(newCorrectness);
//     }

//     return (
//         <div className='quiz'>
//             {data.map((prev, QuestionIndex) => (
//                 <div key={QuestionIndex}>
//                     <h1>{prev.question}</h1>
//                     <ol>
//                         {prev.options.map((option, OptionIndex) => (
//                             <li key={OptionIndex}>
//                                 <button onClick={() => handle_click(OptionIndex, QuestionIndex)}>
//                                     {option}
//                                 </button>
//                                 <p>
//                                     {correctness[QuestionIndex] !== undefined && OptionIndex === index
//                                         ? correctness[QuestionIndex]
//                                             ? "correct"
//                                             : "wrong"
//                                         : ""}
//                                 </p>
//                             </li>
//                         ))}
//                     </ol>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FaqQuestion;

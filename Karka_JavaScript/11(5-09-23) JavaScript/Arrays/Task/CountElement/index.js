// let number=[2,1,4,5,3,1,7,2,2,2,2,2]
// let ans=console.log(count(number,2));
// function count(ele,searc_ele){
//     let count=0;
//     for(i of ele){
//         if(i==searc_ele){
//             count=count+1
//         }
//     }
//     return count
// }

//     OR 


// let list=[2,1,4,5,3,1,7,2,2,2,2,2]
// let count_ele = 2

// let a=list.reduce((first_val,second_val)=>{
//     let b= (second_val==count_ele) ? 1 : 0

//     return first_val+b
// },0)
// console.log(a)

//    OR


let list=[2,1,4,5,3,1,7,2,2,2,2,2]
let count_ele = 2

let a=list.reduce((first_val,second_val)=>{
    if(second_val==count_ele){
        value= 1
    return first_val+value

    }
    else{
        value= 0
        return first_val+value
    }
},0)
console.log(a)

//    OR

// let number=[2,1,4,5,3,1,7,2,2,2,2,2]
// let ans=console.log(count(number,2));
// function count(ele,searc_ele){
//     return ele.reduce((first_val,second_val)=>{
//         let a= (second_val==searc_ele) ? 1 : 0

//         return first_val+a
//     },0)
// }

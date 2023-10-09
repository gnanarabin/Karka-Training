let list=[1,8,5,2,6,9]

console.log(max(list))

function max(l) {
    
    let a=l.reduce((first_val,second_val)=>{
        return ( second_val > first_val ) ? second_val : first_val 
    })
    return a
}

// let l=[4,6,2,1,8]

// let ans=l.reduce((a,b)=>{
//     return (a>b) ? a : b
// })
// console.log(ans);



// let list=[1,8,5,2,6]

// console.log(max(list))

// function max(l) {
//     let element=0

//     l.reduce((total,current)=>{

//         if(current>element){
//             element=current
//         }

//     },0)
//     return element
// }



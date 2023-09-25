// const a=[2,4,7,3]

// for(i=0;i<a.length;i++){
//   console.log(a[i])
// }


// 


// let a=[2,4,7,2]

// b=a.map((e)=>{
//   return e+2;
// })
// console.log(b)


// 


// let a=[2,4,7,2]

// function add(ele){
//   return ele+2;
// }
// let ans=a.map(add)

// console.log(ans)


// 


// let a=[2,4,7,2]

// ans=a.map(function(d){
//   return d+2
// })
// console.log(ans)


// 

// let a=[1,2,3]

// ans=a.map((ele,index)=>{
//   return a[index]+2
// })
// console.log(ans)

// adding +2 in even index::
let a=[2,4,7,3]

ans=a.map((ele,index)=>{
    if(index%2==0){
        return ele+2;
    }
    
})
console.log(ans)
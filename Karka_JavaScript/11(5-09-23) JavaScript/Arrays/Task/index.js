
let number=[1,4,2,6,1,4,3,1,2,6,2]

let ans=except(number,[1,2]);
console.log(ans);

function except(array,remove){
    let l=[]
    for(i of array){
        if(!remove.includes(i))
        l.push(i)
    }
    return l
}
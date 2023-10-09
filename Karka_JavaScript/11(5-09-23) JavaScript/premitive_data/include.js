// let array=[1,2,3,4]

// console.log(array.includes(-1))


let array=[1,2,3,4,1,3,5,3]
let remove_ele=[1,3]


let l=[]
for(i of array){
    if(!remove_ele.includes(i))
    l.push(i)
}
console.log(l)


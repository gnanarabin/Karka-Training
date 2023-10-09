let data=[
    {
        name:"rabin",
        age:22
    },
    {
        name:"rabin2",
        age:20
    },
    {
        name:"rabin3",
        age:26
    }
]
let ans=data.map((val,index)=>{
    return {[data[index].name]:data[index].age}
})
console.log(ans)
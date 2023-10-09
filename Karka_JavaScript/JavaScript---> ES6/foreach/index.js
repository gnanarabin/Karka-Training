let a=[2,4,5,1,6];
let l=[]
ans=a.forEach((val,index)=>{
    if(a[index]%2==0){
        delete a[index]
        l.push(val)
    }
    
})
console.log(a)
console.log(l)
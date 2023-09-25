// can't change the array ; it just return..
// can't modify :....

let a=[2,4,7,3]

ans=a.filter((ele,index)=>{
    if(ele%2==0){
        return ele;
    }
    
    
})
console.log(ans)


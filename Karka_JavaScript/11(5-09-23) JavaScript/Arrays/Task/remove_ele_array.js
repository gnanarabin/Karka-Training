l1=[1,4,2,6,1,2,6,5,1]
l2=[1,2,4]

for(i of l2){
  list=l1.filter((ele)=>{
    if(ele!=i) return ele
  })
  l1=list
}
console.log(l1)